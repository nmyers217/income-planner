import { FreshContext } from "$fresh/server.ts";
import { Auth, AuthConfig } from "@auth/core";
import { DrizzleAdapter } from "@auth/drizzle-adaper";
import Google from "@auth/express/providers/google";
import Resend from "@auth/express/providers/resend";

import { db } from "$db/client.ts";

export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const secret = Deno.env.get("AUTH_SECRET");
  return await Auth(
    req,
    {
      trustHost: true,
      secret,
      adapter: DrizzleAdapter(db),
      providers: [
        // TODO: add the resend provider for magic link support
        Resend({
          apiKey: Deno.env.get("AUTH_RESEND_KEY"),
          from: "support@incomeplanner.com",
        }),
        Google({
          clientId: Deno.env.get("AUTH_GOOGLE_ID"),
          clientSecret: Deno.env.get("AUTH_GOOGLE_SECRET"),
        }),
      ],
    } as AuthConfig,
  );
};
