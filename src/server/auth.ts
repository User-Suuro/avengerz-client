import { db } from "./db/drizzle";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth";
import { account, user, session, verification } from "./db/schema/auth-schema";
import { sendMail } from "./utils/mailer";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "mysql",
    schema: {
      user,
      account,
      session,
      verification,
    },
  }),

  emailAndPassword: {
    enabled: true,
    async sendResetPassword({ user, url }) {
      await sendMail({
        to: user.email,
        subject: "Reset your password",
        text: "Click the link to reset your password: " + url,
      });
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    async sendVerificationEmail({ user, url }) {
      await sendMail({
        to: user.email,
        subject: "Verify your email",
        text: "Click the link to verify your email: " + url,
      });
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        input: false,
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = (typeof auth.$Infer.Session)["user"];
