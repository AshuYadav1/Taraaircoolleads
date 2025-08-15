import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  location: text("location"),
  message: text("message"),
  source: text("source"), // form, whatsapp, call
  createdAt: timestamp("created_at").defaultNow()
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  name: true,
  phone: true,
  service: true,
  location: true,
  message: true,
  source: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export const analytics = pgTable("analytics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  event: text("event").notNull(),
  page: text("page"),
  userAgent: text("user_agent"),
  ip: text("ip"),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertAnalyticsSchema = createInsertSchema(analytics).pick({
  event: true,
  page: true,
  userAgent: true,
  ip: true,
});

export type InsertAnalytics = z.infer<typeof insertAnalyticsSchema>;
export type Analytics = typeof analytics.$inferSelect;
