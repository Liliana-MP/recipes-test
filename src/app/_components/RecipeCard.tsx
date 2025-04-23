import Image from "next/image";
import styles from "./recipeCard.module.scss";
import { SponsoredPill } from "./SponsoredPill";

interface Props {
  image: {
    url: string;
    name: string;
  };
  title: string;
  profiles?: { name: string; id: number }[];
  sponsored?: boolean;
  type: string;
}

export const RecipeCard = ({
  image,
  title,
  profiles,
  sponsored,
  type,
}: Props) => {
  return (
    <div className={styles.container}>
      {sponsored && (
        <div className={styles.pill}>
          <SponsoredPill />
        </div>
      )}
      <div className={styles.recipeContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={`https://img.koket.se/square-medium/${image.url}`}
            alt={image.name}
            fill
          />
        </div>
        <h4>{title}</h4>

        {profiles &&
          profiles.map((profile) => (
            <span key={profile.id}>{profile.name}</span>
          ))}
        <span>Type:{type}</span>
      </div>
    </div>
  );
};
