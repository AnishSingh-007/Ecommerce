const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

module.exports.addToCart = async(req, res, next) => {
    console.log(req.body);
    const { userId, productId } = req.body;
    console.log("userid and productid", userId, productId);

    const isUpdate = await User.updateOne({ _id: userId}, 
    {$addToSet: {cart: productId}})

    if (isUpdate) {
        return res.status(200).json({
            status: "success",
            message: "Product added successfully"
        })
    } else {
        return res.status(500).json({
            status: "fail",
        })
    }
};

module.exports.getCart = async (req, res, next) => {    
    const userId = req.body.userId;
    console.log(userId)

    const data = await User.findOne({ _id: userId}).populate('cart');

    if (data) {
        return res.status(200).json({
            status: "success",
            message: "cart fetched successfully",
            data: data
        })
    } else {
        return res.status(500).json({
            status: "fail",
            message: "cart fetched failed",
        })
    }
}