import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const $blogs = pgTable("blogs", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    imageUrl: text("imageUrl"),
    userId: text("userId").notNull(),
    editorState: text("editorState"),
});

export type BlogType = typeof $blogs.$inferInsert;
