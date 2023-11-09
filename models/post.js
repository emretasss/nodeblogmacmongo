import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: () => new Date() },
});

export default mongoose.model('Post', PostSchema);
