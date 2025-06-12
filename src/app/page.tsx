import { redirect } from 'next/navigation';
import styles from "./page.module.css";
import SignIn from '@/ui/sign-in';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  if (session) {
      return redirect('/lists');
  }

  return (
      <div className={styles.page}>
          <main className={styles.main}>
              <div className={styles.ctas}>
                  <SignIn />
              </div>
          </main>
      </div>
  );
}
