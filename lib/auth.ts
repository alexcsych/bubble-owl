import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";
import PostHogClient from "@/lib/posthog";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  databaseHooks: {
    session: {
      create: {
        after: async (session) => {
          const posthog = PostHogClient();

          posthog.capture({
            distinctId: session.userId,
            event: 'security_login_success',
            properties: {
              action: 'login',
              timestamp: new Date().toISOString()
            }
          });

          await posthog.shutdown();
        }
      }
    }
  },
  onAPIError: {
    onError: async (error, ctx) => {
      const posthog = PostHogClient();
      const err = error as any;

      if (err.status === 401 || err.status === 403 || err.status === 404) {
        posthog.capture({
          distinctId: 'api_security_monitor',
          event: 'security_login_failed_server',
          properties: {
            error_message: err.message || 'Unknown error',
            error_status: err.status,
            timestamp: new Date().toISOString(),
            is_server_side: true,
            path: (ctx as any).path || 'api/auth'
          }
        });
      }

      await posthog.shutdown();
    }
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    },
  },
});
