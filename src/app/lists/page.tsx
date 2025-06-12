import { redirect } from 'next/navigation';
import styles from "./page.module.css";
import SignOut from '@/ui/sign-out';
import { auth } from '@/auth';

export default async function Lists() {
    const session = await auth();

    if (!session) {
        return redirect('/');
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
            <div className={styles.ctas}>
                <SignOut />
            </div>
            </main>
        </div>
    );
}
