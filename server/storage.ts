import { type Lead, type InsertLead, type Analytics, type InsertAnalytics } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: string): Promise<Lead | undefined>;
  trackEvent(analytics: InsertAnalytics): Promise<Analytics>;
  getAnalytics(): Promise<Analytics[]>;
  isHealthy(): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private leads: Map<string, Lead>;
  private analytics: Map<string, Analytics>;

  constructor() {
    this.leads = new Map();
    this.analytics = new Map();
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    try {
      const id = randomUUID();
      const lead: Lead = { 
        ...insertLead,
        source: insertLead.source || null,
        location: insertLead.location || null,
        message: insertLead.message || null,
        id,
        createdAt: new Date()
      };
      this.leads.set(id, lead);
      return lead;
    } catch (error) {
      console.error("Error creating lead in memory storage:", error);
      throw new Error("Failed to create lead");
    }
  }

  async getLeads(): Promise<Lead[]> {
    try {
      return Array.from(this.leads.values()).sort(
        (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
      );
    } catch (error) {
      console.error("Error fetching leads from memory storage:", error);
      throw new Error("Failed to fetch leads");
    }
  }

  async getLeadById(id: string): Promise<Lead | undefined> {
    try {
      return this.leads.get(id);
    } catch (error) {
      console.error("Error fetching lead by ID from memory storage:", error);
      throw new Error("Failed to fetch lead");
    }
  }

  async trackEvent(insertAnalytics: InsertAnalytics): Promise<Analytics> {
    try {
      const id = randomUUID();
      const analytics: Analytics = {
        ...insertAnalytics,
        page: insertAnalytics.page || null,
        userAgent: insertAnalytics.userAgent || null,
        ip: insertAnalytics.ip || null,
        id,
        createdAt: new Date()
      };
      this.analytics.set(id, analytics);
      return analytics;
    } catch (error) {
      console.error("Error tracking analytics in memory storage:", error);
      throw new Error("Failed to track analytics event");
    }
  }

  async getAnalytics(): Promise<Analytics[]> {
    try {
      return Array.from(this.analytics.values()).sort(
        (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
      );
    } catch (error) {
      console.error("Error fetching analytics from memory storage:", error);
      throw new Error("Failed to fetch analytics");
    }
  }

  async isHealthy(): Promise<boolean> {
    return true; // Memory storage is always healthy
  }
}

// Database storage implementation (for future use)
export class DatabaseStorage implements IStorage {
  private db: any; // Will be properly typed when database is configured

  constructor(db: any) {
    this.db = db;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    try {
      // TODO: Implement database lead creation
      throw new Error("Database storage not implemented yet");
    } catch (error) {
      console.error("Error creating lead in database:", error);
      throw new Error("Failed to create lead in database");
    }
  }

  async getLeads(): Promise<Lead[]> {
    try {
      // TODO: Implement database lead fetching
      throw new Error("Database storage not implemented yet");
    } catch (error) {
      console.error("Error fetching leads from database:", error);
      throw new Error("Failed to fetch leads from database");
    }
  }

  async getLeadById(id: string): Promise<Lead | undefined> {
    try {
      // TODO: Implement database lead fetching by ID
      throw new Error("Database storage not implemented yet");
    } catch (error) {
      console.error("Error fetching lead by ID from database:", error);
      throw new Error("Failed to fetch lead from database");
    }
  }

  async trackEvent(insertAnalytics: InsertAnalytics): Promise<Analytics> {
    try {
      // TODO: Implement database analytics tracking
      throw new Error("Database storage not implemented yet");
    } catch (error) {
      console.error("Error tracking analytics in database:", error);
      throw new Error("Failed to track analytics in database");
    }
  }

  async getAnalytics(): Promise<Analytics[]> {
    try {
      // TODO: Implement database analytics fetching
      throw new Error("Database storage not implemented yet");
    } catch (error) {
      console.error("Error fetching analytics from database:", error);
      throw new Error("Failed to fetch analytics from database");
    }
  }

  async isHealthy(): Promise<boolean> {
    try {
      // TODO: Implement database health check
      return false;
    } catch (error) {
      return false;
    }
  }
}

// Storage factory function
export function createStorage(): IStorage {
  // For now, use memory storage
  // In the future, this can be enhanced to use database storage
  // based on environment variables or configuration
  return new MemStorage();
}

export const storage = createStorage();
