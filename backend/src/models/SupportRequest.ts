// src/models/SupportRequest.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface ISupportRequest extends Document {
  bookingId: mongoose.Types.ObjectId;
  propertyId: string;
  issue: string;
  status: 'Open' | 'In Progress' | 'Closed';
}

const SupportRequestSchema: Schema = new Schema({
  bookingId: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
  propertyId: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
}, { timestamps: true });

export default mongoose.model<ISupportRequest>('SupportRequest', SupportRequestSchema);