import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhar: { type: String, required: true, unique: true },
  pan: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  occupation: { type: String },
  status: { type: String, default: 'pending' }, // pending / approved / rejected
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Application", ApplicationSchema);
