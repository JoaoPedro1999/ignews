import { query } from "faunadb";

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        const result = await fauna.query(
          query.If(
            query.Not(
              query.Exists(
                query.Match(query.Index("find_by_email"), user.email)
              )
            ),
            query.Create(query.Collection("user"), {
              data: { email: user.email },
            }),
            query.Get(query.Match(query.Index("find_by_email"), user.email))
          )
        );

        console.log("result", result);

        return true;
      } catch {
        return false;
      }
    },
  },
});
