import { Request, Response } from 'express';
import Application from '../models/application.model';

export const submitApplication = async (req: Request, res: Response) => {
  try {
    const app = new Application(req.body);
    await app.save();
    res.status(201).json(app);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const getApplications = async (req: Request, res: Response) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getStats = async (req: Request, res: Response) => {
  try {
    const apps = await Application.find();
    const total = apps.length;
    const avgLoan = total ? apps.reduce((sum, a) => sum + a.loanAmount, 0) / total : 0;
    const approved = apps.filter(a => a.status === "approved").length;
    const rejected = apps.filter(a => a.status === "rejected").length;
    const pending = apps.filter(a => a.status === "pending").length;

    res.json({
      total,
      avgLoan,
      approved,
      rejected,
      pending
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
