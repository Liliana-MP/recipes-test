import styles from "./page.module.scss";
import { Recipes } from "./_components/Recipes";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello</h1>
        <Recipes />
      </main>
    </div>
  );
}
