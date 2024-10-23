const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  imageURL: { type: String, required: true },
  rate: { type: Number, required: false , default: 4 },
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: String, required: true },
      type: { type: String, required: true }
    }
  ],
  steps: [
    {
      content: { type: String, required: true },
      timer: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema, 'recipes');
