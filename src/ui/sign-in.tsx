import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("auth0", {
          redirectTo: '/lists',
        })
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  )
} 