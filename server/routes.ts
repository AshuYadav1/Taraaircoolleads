import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertAnalyticsSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead creation endpoint
  app.post("/api/leads", async (req: Request, res: Response) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);
      
      // Log the lead for monitoring
      console.log(`New lead created: ${lead.name} - ${lead.phone} - ${lead.service}`);
      
      res.json(lead);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      console.error("Error creating lead:", error);
      res.status(500).json({ message: "Failed to create lead" });
    }
  });

  // Get all leads
  app.get("/api/leads", async (req: Request, res: Response) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ message: "Failed to fetch leads" });
    }
  });

  // Analytics tracking endpoint
  app.post("/api/analytics", async (req: Request, res: Response) => {
    try {
      const analyticsData = insertAnalyticsSchema.parse({
        ...req.body,
        userAgent: req.get('User-Agent'),
        ip: req.ip || req.connection.remoteAddress
      });
      
      const analytics = await storage.trackEvent(analyticsData);
      res.json(analytics);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      console.error("Error tracking analytics:", error);
      res.status(500).json({ message: "Failed to track event" });
    }
  });

  // WhatsApp webhook endpoint (for future integration)
  app.post("/api/whatsapp", async (req: Request, res: Response) => {
    try {
      // TODO: Implement WhatsApp Business API webhook handler
      console.log("WhatsApp webhook received:", req.body);
      res.json({ status: "received" });
    } catch (error) {
      console.error("Error handling WhatsApp webhook:", error);
      res.status(500).json({ message: "Failed to process WhatsApp webhook" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
