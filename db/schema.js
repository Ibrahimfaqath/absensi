import { pgTable, serial, text, boolean, timestamp, integer } from "drizzle-orm/pg-core";

// Tabel users
export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    role: text("role").notNull().default("user"), // admin / user
    is_active: boolean("is_active").default(true),
});

