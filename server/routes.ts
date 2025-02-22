import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/services", async (_req, res) => {
    const services = await storage.getAllServices();
    res.json(services);
  });

  app.post("/api/appointments", async (req, res) => {
    const result = insertAppointmentSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ error: "Invalid appointment data" });
      return;
    }

    const appointment = await storage.createAppointment(result.data);
    res.json(appointment);
  });

  const httpServer = createServer(app);
  return httpServer;
}
