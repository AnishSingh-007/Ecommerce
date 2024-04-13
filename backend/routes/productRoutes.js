

const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/Admin/add-product', productController.createProduct);

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductById);

router.put('/:id', productController.updateProductById);

router.delete('/:id', productController.deleteProductById);

module.exports = router;
