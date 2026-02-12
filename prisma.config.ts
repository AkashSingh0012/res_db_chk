import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",

    // 👇 ADD THIS LINE
    seed: "ts-node prisma/seed.js"
  },

  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
