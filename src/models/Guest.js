import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String, required: true },
  tNumber: { type: String },
  vip: { type: Boolean, required: true },
}, { versionKey: false });

const guest = mongoose.model('guests', guestSchema);

export default guest;
