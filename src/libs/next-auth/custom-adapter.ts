import { Adapter } from "next-auth/adapters";
import { PrismaClient } from "@prisma/client";

export function PrismaAdapter(prisma: PrismaClient): Adapter {
  return {
    async createUser(user) {
      const prismaUser = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url,
        },
      });

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email!,
        avatar_url: prismaUser.avatar_url!,
        emailVerified: null,
      };
    },
    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) return null;

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        avatar_url: user.avatar_url!,
        emailVerified: null,
      };
    },
    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) return null;

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        avatar_url: user.avatar_url!,
        emailVerified: null,
      };
    },
    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      });

      if (!account) return null;

      const { user } = account;

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        avatar_url: user.avatar_url!,
        emailVerified: null,
      };
    },
    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id!,
        },
        data: {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url,
        },
      });

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email!,
        avatar_url: prismaUser.avatar_url!,
        emailVerified: null,
      };
    },
    async linkAccount(account) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      });
    },
    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          expires,
          session_token: sessionToken,
          user_id: userId,
        },
      });

      return {
        userId,
        sessionToken,
        expires,
      };
    },
    async getSessionAndUser(sessionToken) {
      const session = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      });

      if (!session) return null;

      const { user, ...prismaSession } = session;

      return {
        session: {
          expires: prismaSession.expires,
          sessionToken: prismaSession.session_token,
          userId: prismaSession.user_id,
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email!,
          avatar_url: user.avatar_url!,
          emailVerified: null,
        },
      };
    },
    async updateSession({ sessionToken, expires, userId }) {
      const session = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      });

      return {
        sessionToken: session.session_token,
        userId: session.user_id,
        expires: session.expires,
      };
    },
    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      });
    },
  };
}
