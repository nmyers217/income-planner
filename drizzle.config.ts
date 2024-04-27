import type { Config } from "drizzle-kit";

import "$std/dotenv/load.ts";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: Deno.env.get("TURSO_DATABASE_URL")!,
    authToken: Deno.env.get("TURSO_AUTH_TOKEN")!,
  },
} satisfies Config;
