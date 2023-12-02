import type { Config } from "drizzle-kit";

export default {
    driver: "pg",
    schema: "./app/lib/db/schema.ts",
    dbCredentials: {
        connectionString: `${process.env.DATABASE_URL}`!,
    },
} satisfies Config;
