import styles from "./recipeCard.module.scss";

interface Props {
  title: string;
}

export const RecipeCard = ({ title }: Props) => {
  return <div className={styles.container}>{title}</div>;
};
