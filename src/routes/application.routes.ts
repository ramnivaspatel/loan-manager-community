import express from 'express';
import { submitApplication, getApplications, getStats } from '../controllers/application.controller';

const router = express.Router();

router.post('/applications', submitApplication);
router.get('/applications', getApplications);
router.get('/stats', getStats);

export default router;
