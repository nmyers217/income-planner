import { migrate } from "drizzle-orm/libsql/migrator";
import { client, db } from "./client.ts";

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: "./drizzle" });

// Don't forget to close the connection, otherwise the script will hang
client.close();
