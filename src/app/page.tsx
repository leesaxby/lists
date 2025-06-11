import styles from "./page.module.css";
import SignIn from '@/ui/sign-in';
import SignOut from '@/ui/sign-out';

export default async function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
            <SignOut />
            <SignIn />              
        </div>
      </main>
    </div>
  );
}
