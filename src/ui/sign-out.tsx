import { redirect } from 'next/navigation';
import { signOut } from "@/auth"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({
          redirect: false,
        });
      redirect(`${process.env.AUTH_AUTH0_ISSUER}/v2/logout?returnTo=${process.env.NEXT_PUBLIC_APP_URL}`);
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
} 