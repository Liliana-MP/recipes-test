import styles from "./pill.module.scss";

interface Props {
  title: string;
  sponsored?: boolean;
}

export const Pill = ({ title, sponsored }: Props) => {
  return (
    <div className={sponsored ? styles.sponsoredContainer : styles.container}>
      <p className={styles.bla}>{title}</p>
    </div>
  );
};
