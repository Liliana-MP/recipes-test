import styles from "./page.module.scss";
import { Recipes } from "./_components/Recipes";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Recipes />
      </main>
    </div>
  );
}
