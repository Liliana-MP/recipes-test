import styles from "./pill.module.scss";

interface Props {
  title: string;
}

export const Pill = ({ title }: Props) => {
  return <div className={styles.container}>{title}</div>;
};
