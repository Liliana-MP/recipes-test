import Image from "next/image";
import styles from "./card.module.scss";
import { Pill } from "./Pill";

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

export const Card = ({ image, title, profiles, sponsored, type }: Props) => {
  return (
    <div className={styles.container}>
      {sponsored && (
        <div className={styles.pill}>
          <Pill title="Sponsrat" />
        </div>
      )}
      <div className={styles.recipeContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={`https://img.koket.se/square-medium/${image.url}`}
            alt={image.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h4>{title}</h4>

        {profiles && (
          <div className={styles.profiles}>
            {profiles.map((profile) => (
              <span key={profile.id}>{profile.name}</span>
            ))}
          </div>
        )}
        <span>Type:{type}</span>
      </div>
    </div>
  );
};
