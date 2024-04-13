const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const userController = require('../controller/userController');

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/add-to-cart", userController.addToCart);
router.post("/get-cart", userController.getCart);

module.exports = router;
