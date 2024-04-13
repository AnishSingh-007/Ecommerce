// const Product = require('../models/productModel');

// exports.getAllProducts = async (req, res) => {
//     try{
//         const products = await Product.find();
    
//         res.status(200).json({
//             status: 'success',
//             results: products.length,
//             data: {
//                 products
//             }
//         })
//     } catch(error) {
//         console.log(error);
//         res.status(500).json({
//             status: 'fail',
//             message: error
//         });
//     }
// }


const Product = require("../models/productModel")

// Create a new product
// ADMIN 
const createProduct = async (req, res) => {
  try {
    const lastProduct = await Product.findOne().sort({ id: -1 }).select('id').limit(1);

    let newProductId;
    if (lastProduct) {
      newProductId = lastProduct.id + 1;
    } else {
      newProductId = 1; // If no previous product, start from 1
    }

    const product = new Product();
    product.id = newProductId;

    // Assign each field from req.body one by one
    if (req.body.category) product.category = req.body.category;
    if (req.body.title) product.title = req.body.title;
    if (req.body.description) product.description = req.body.description;
    if (req.body.price) product.price = req.body.price;
    if (req.body.oldPrice) product.oldPrice = req.body.oldPrice;
    if (req.body.rating) product.rating = req.body.rating;
    if (req.body.inStock) product.inStock = req.body.inStock;
    if (req.body.images) product.images = req.body.images;

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
    // const id = parseInt(req.params.id);
    const id = +req.params.id;
    console.log("REQUEST.PARAM.ID", id, typeof id);
  try {
    const product = await Product.findOne({id});
    console.log("PRODUCT", product);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a product by ID
// ADMIN
const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a product by ID
//ADMIN
const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
