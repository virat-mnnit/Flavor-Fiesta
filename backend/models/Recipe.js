import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String },
    image: { type: String, default: "" },

    cuisine: { type: String, default: "" },
    difficulty: { type: String, default: "" },

    cookingTime: { type: Number, default: 0 },
    servings: { type: Number, default: 1 },

    ingredients: {
      type: [String],
      default: [],
      set: v => v.map(i => i.toLowerCase().trim())
    },

    instructions: {
      type: [String],
      default: []
    },

    nutritionalInfo: {
      calories: Number,
      protein: Number,
      carbs: Number,
      fat: Number,
      fiber: Number
    },

    dietaryRestrictions: {
      type: [String],
      default: []
    },

    rating: { type: Number, default: 0 },

    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        ret.id = ret._id.toString();
        delete ret._id;
      }
    }
  }
);

export default mongoose.model("Recipe", recipeSchema);
