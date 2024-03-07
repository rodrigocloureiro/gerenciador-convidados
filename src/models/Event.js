import mongoose from 'mongoose';
import { guestSchema } from './Guest.js';

const eventSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date },
  place: { type: String },
  guests: [ guestSchema ],
}, { versionKey: false });

const event = mongoose.model('events', eventSchema);

export default event;
