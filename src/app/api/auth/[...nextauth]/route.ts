import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.OAUTH_CLIENT_ID ?? "",
      clientSecret: process.env.OAUTH_CLIENT_SECRET ?? "",
    }),
  ],
});

export { NextAuth as GET, NextAuth as POST };
