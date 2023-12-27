import Header from "@/components/ui/header/header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.caroulsel}>
        <Header />
      </div>
    </main>
  );
}
