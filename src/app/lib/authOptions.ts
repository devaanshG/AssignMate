import { getServerSession, NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const providers = [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
  }),
  // CredentialsProvider({
  //   name: "Credentials",
  //   credentials: {
  //     email: { label: "Email", type: "email" },
  //     password: { label: "Password", type: "password" },
  //   },
  //   async authorize(credentials) {
  //     // Add logic to verify credentials here
  //     if (!credentials) return null;
  //     const { email, password } = credentials;
  //     // Fetch user and password hash from your database;
  //     const user = await fetch("/api/auth");
  //     if (user && compareSync(password, user.passwordHash)) {
  //       return { id: user.id, name: user.name, email: user.email };
  //     } else {
  //       throw new Error("Invalid credentials");
  //     }
  //   },
  // }),
];

export const authOptions: NextAuthOptions = {
  providers: providers,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  jwt: {},
  callbacks: {},
  pages: {
    signIn: "/signin",
  },
  adapter: MongoDBAdapter(clientPromise),
};

export function getAuth() {
  getServerSession(authOptions);
}
