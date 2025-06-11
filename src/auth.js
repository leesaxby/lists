import NextAuth from "next-auth";
import Auth0 from '@auth/core/providers/auth0';

export const { handlers, signIn, signOut, auth } =  NextAuth({
  providers: [
    Auth0,
  ],
});
