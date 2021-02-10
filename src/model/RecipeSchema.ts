import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

export default mongoose.model("Recipes", RecipeSchema);
