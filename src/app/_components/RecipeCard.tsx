import Image from "next/image";
import styles from "./recipeCard.module.scss";

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
      <Image
        src={`https://img.koket.se/square-medium/${image.url}`}
        alt={image.name}
        width={400}
        height={400}
      />
      <h4>{title}</h4>

      {profiles &&
        profiles.map((profile) => <span key={profile.id}>{profile.name}</span>)}
      {sponsored && <span>Sponsored:{sponsored.toString()}</span>}
      <span>Type:{type}</span>
    </div>
  );
};
