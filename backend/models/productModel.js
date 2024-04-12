const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Category: [String],
    title: String,
    description: String,
    price: Number,
    oldPrice: Number,
    inStock: Number,
    rating: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;