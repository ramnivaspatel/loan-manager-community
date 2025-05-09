import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import appRoutes from './routes/application.routes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", appRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI!)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((err) => console.log(err));
