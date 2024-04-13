
const Category = require('../models/categoryModel')

exports.postCategory = async (req, res) => {
    try {
      const { categoryName } = req.body;
      const category = new Category({ name: categoryName });
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
