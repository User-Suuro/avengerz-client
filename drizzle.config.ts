import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/server/db/schema/*",
  out: "./src/server/db/migrations",
  dbCredentials: {
    url: process.env.DB_URL as string,
  },
  strict: true,
});
