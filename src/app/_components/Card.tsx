import Image from "next/image";
import styles from "./card.module.scss";
import { Pill } from "./Pill";

interface Props {
  data: {
    name: string;
    profiles?: { name: string; id: number }[];
    sponsored?: boolean;
    type: string;
    image: {
      url: string;
      name: string;
    };
  };
}

export const Card = ({ data }: Props) => {
  const { sponsored, name, profiles, type, image } = data;

  return (
    <div className={styles.container}>
      {sponsored && (
        <div className={styles.sponsoredPill}>
          <Pill title="Sponsrat" sponsored />
        </div>
      )}
      <div className={styles.typePill}>
        <Pill title={type} />
      </div>
      <div className={styles.recipeContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={`https://img.koket.se/square-medium/${image.url}`}
            alt={image.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h4>{name}</h4>

        {profiles && (
          <div className={styles.profiles}>
            {profiles.map((profile) => (
              <span key={profile.id}>{profile.name}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
