// NEEDS IMPORT SO TYPESCRIPT KNOWS WE'LL OVERRIDE'
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
  }

  interface Session {
    user: User;
  }
}
