import styles from "./page.module.scss";
import { CardContainer } from "./_components/CardContainer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CardContainer />
      </main>
    </div>
  );
}
