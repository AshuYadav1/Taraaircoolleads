import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertAnalyticsSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", async (req: Request, res: Response) => {
    try {
      const isHealthy = await storage.isHealthy();
      res.json({ 
        status: isHealthy ? "healthy" : "unhealthy",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development"
      });
    } catch (error) {
      console.error("Health check failed:", error);
      res.status(503).json({ 
        status: "unhealthy",
        error: "Storage health check failed",
        timestamp: new Date().toISOString()
      });
    }
  });

  // Lead creation endpoint
  app.post("/api/leads", async (req: Request, res: Response) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);
      
      // Log the lead for monitoring
      console.log(`New lead created: ${lead.name} - ${lead.phone} - ${lead.service}`);
      
      res.status(201).json({
        success: true,
        data: lead,
        message: "Lead created successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: error.errors 
        });
      }
      console.error("Error creating lead:", error);
      res.status(500).json({ 
        success: false,
        message: "Failed to create lead",
        error: process.env.NODE_ENV === "development" ? (error as Error).message : "Internal server error"
      });
    }
  });

  // Get all leads
  app.get("/api/leads", async (req: Request, res: Response) => {
    try {
      const leads = await storage.getLeads();
      res.json({
        success: true,
        data: leads,
        count: leads.length
      });
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ 
        success: false,
        message: "Failed to fetch leads",
        error: process.env.NODE_ENV === "development" ? (error as Error).message : "Internal server error"
      });
    }
  });

  // Get lead by ID
  app.get("/api/leads/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const lead = await storage.getLeadById(id);
      
      if (!lead) {
        return res.status(404).json({
          success: false,
          message: "Lead not found"
        });
      }
      
      res.json({
        success: true,
        data: lead
      });
    } catch (error) {
      console.error("Error fetching lead by ID:", error);
      res.status(500).json({ 
        success: false,
        message: "Failed to fetch lead",
        error: process.env.NODE_ENV === "development" ? (error as Error).message : "Internal server error"
      });
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
      res.status(201).json({
        success: true,
        data: analytics,
        message: "Event tracked successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Validation error", 
          errors: error.errors 
        });
      }
      console.error("Error tracking analytics:", error);
      res.status(500).json({ 
        success: false,
        message: "Failed to track event",
        error: process.env.NODE_ENV === "development" ? (error as Error).message : "Internal server error"
      });
    }
  });

  // Get analytics
  app.get("/api/analytics", async (req: Request, res: Response) => {
    try {
      const analytics = await storage.getAnalytics();
      res.json({
        success: true,
        data: analytics,
        count: analytics.length
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
      res.status(500).json({ 
        success: false,
        message: "Failed to fetch analytics",
        error: process.env.NODE_ENV === "development" ? (error as Error).message : "Internal server error"
      });
    }
  });

  // WhatsApp webhook endpoint (for future integration)
  app.post("/api/whatsapp", async (req: Request, res: Response) => {
    try {
      // TODO: Implement WhatsApp Business API webhook handler
      console.log("WhatsApp webhook received:", req.body);
      res.json({ 
        success: true,
        status: "received",
        message: "Webhook processed successfully"
      });
    } catch (error) {
      console.error("Error handling WhatsApp webhook:", error);
      res.status(500).json({ 
        success: false,
        message: "Failed to process WhatsApp webhook",
        error: process.env.NODE_ENV === "development" ? (error as Error).message : "Internal server error"
      });
    }
  });

  // 404 handler for API routes
  app.use("/api/*", (req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "API endpoint not found",
      path: req.path
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
