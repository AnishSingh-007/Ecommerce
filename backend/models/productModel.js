const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    category: String, 
    title: String,
    description: String,
    price: Number,
    oldPrice: Number,
    rating: Number,
    inStock: Number,
    images: [String] 
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
