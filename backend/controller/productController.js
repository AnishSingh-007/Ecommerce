const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();
    
        res.status(200).json({
            status: 'success',
            results: products.length,
            data: {
                products
            }
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error
        });
    }
}