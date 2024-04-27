import { AuthConfig } from "@auth/core";
import { DrizzleAdapter } from "@auth/drizzle-adaper";
import Google from "@auth/express/providers/google";
import Resend from "@auth/express/providers/resend";
import { db } from "$db/client.ts";

export const authConfig: AuthConfig = {
  trustHost: true,
  secret: Deno.env.get("AUTH_SECRET"),
  adapter: DrizzleAdapter(db),
  providers: [
    Resend({
      apiKey: Deno.env.get("AUTH_RESEND_KEY"),
      from: Deno.env.get("AUTH_RESEND_EMAIL"),
    }),
    Google({
      clientId: Deno.env.get("AUTH_GOOGLE_ID"),
      clientSecret: Deno.env.get("AUTH_GOOGLE_SECRET"),
    }),
  ],
};
