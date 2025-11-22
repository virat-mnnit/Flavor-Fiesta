import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
  comment: { type: String, required: true, trim: true }
}, { timestamps: true });

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);
