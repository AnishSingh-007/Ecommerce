
const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

router.post('/', categoryController.postCategory);

router.get('/', categoryController.getAllCategories);


module.exports = router;