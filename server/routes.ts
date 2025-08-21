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

  // Mailing list subscription route with Mailchimp integration
  app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    try {
      // For now, log the subscription and respond successfully
      // The actual Mailchimp integration happens on the frontend via the loaded script
      console.log('New email subscription:', email);
      
      // In production, you would make a server-side call to Mailchimp API here
      // But since we're using the frontend script, we'll just confirm receipt
      res.json({ success: true, message: 'Successfully subscribed to mailing list' });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ error: 'Failed to process subscription' });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
