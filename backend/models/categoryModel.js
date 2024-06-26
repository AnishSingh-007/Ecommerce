const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    categoryTitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
