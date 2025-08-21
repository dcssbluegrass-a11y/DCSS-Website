import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // PDF download route
  app.get('/api/download/stage-plot', (req, res) => {
    const pdfPath = path.join(process.cwd(), 'attached_assets', 'Deer Creek Sharp Shooters Stage Plot Input List (3)_1755457651063.pdf');
    res.download(pdfPath, 'DCSS_Stage_Plot_Input_List.pdf', (err) => {
      if (err) {
        console.error('Error downloading PDF:', err);
        res.status(404).send('File not found');
      }
    });
  });

  // Mailing list subscription route
  app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Here you would typically integrate with a mailing service like Mailchimp, ConvertKit, etc.
    // For now, we'll just log it and return success
    console.log('New email subscription:', email);
    
    res.json({ success: true, message: 'Successfully subscribed to mailing list' });
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
