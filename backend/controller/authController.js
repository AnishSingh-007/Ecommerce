const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");


const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res, message) => {
  const token = signToken(user._id);
//   console.log("TOKEN", token);
//   console.log(user, statusCode, message);

  user.password = undefined; // remove the password from the output

  res.status(statusCode).json({
    status: "success",
    message: message,
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res, next) => {
  console.log("SIGNUP", req.body);
  try {
    
  const { email, password } = req.body;

  if (!email) {
    return next(new AppError("Please enter email fields", 400));
  }
  if (!password) {
    return next(new AppError("Please enter password fields", 400));
  }

  const existingUser = await User.findOne({ email: req.body.email });
  // if (email === await User.findOne({ email: email})) {
  if (existingUser) {
    return next(new AppError("User with given email already Exist!", 400));
  }

  console.log(existingUser);

  // const newUser = await User.create(req.body); // In this code anyone can put the "role" as ADMIN, To avoid this we define only particular feild which we will going to accept
  const newUser = await User.create({
    email,
    password,
  });

  console.log(newUser);

    res.status(201).json({
      status: "success",
      message: "Signup Successfully!",
    });
  } catch (err) {
    return next(
      new AppError("There was an error sending the email. Try again later."),
      500
    );
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist // Check the email and password fields are not empty.
  if (!email || !password) {
    return next(new AppError("Please provide the email and password", 400));
  }
  // 2) Check if user exists and password is correct
  const user = await User.findOne({ email })
    .select("+password")

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect Email or Password", 401));
  }

  // Check email is verified or not
  console.log("verifiedEmail", user.verifiedEmail);
//   if (!user.verifiedEmail) {
//     let token = await VerifyToken.findOne({ userId: user._id });

//     if (!token) {
//       token = await new VerifyToken({
//         userId: user._id,
//         token: crypto.randomBytes(32).toString("hex"),
//       }).save();
//     }

//     const EmailVerificationURL = `http://localhost:3000/users/account-activation/${user._id}/${token.token}`;

//     let tokenMessage = `New to INSTITUTEHUB? Click the url to verify your Email id : ${EmailVerificationURL}. 
//     \nIf you didn't creating your account, please ignore this email!`;

//     await sendEmail({
//       email: user.email,
//       subject: " Verify Your Email (valid for 10 min) ",
//       message: tokenMessage,
//     });

//     return res
//       .status(400)
//       .send({ message: "An Email sent to your account please verify" });
//   }

  // if everything is ok , send Token to the client

  createSendToken(user, 200, res);
  // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
  //   expiresIn: process.env.JWT_EXPIRES_IN,
  // });

  // res.status(200).json({
  //   status: "success",
  //   token
  // });
};

