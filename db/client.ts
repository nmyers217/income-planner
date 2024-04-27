import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import "$std/dotenv/load.ts";

export const client = createClient({
  url: Deno.env.get("TURSO_DATABASE_URL")!,
  authToken: Deno.env.get("TURSO_AUTH_TOKEN")!,
});

export const db = drizzle(client);
