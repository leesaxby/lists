import styles from "./page.module.css";
import SignIn from '@/ui/sign-in';
import SignOut from '@/ui/sign-out';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

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
