const mongoose = require('mongoose');
const crypto = require('crypto');
const validator = require('validator');
const bcrypt = require('bcrypt')

// SETTING SCHEMA FOR name, email, photo, password, passwordConfirm
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        // required: [true, 'please provide us Your name!']
    },
    email: {
        type: String, 
        required: [true, 'please provide your email address'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address']
    },
    photo: String, 
    password: {
        type: String,
        required: [true, 'please provide a password'],
        minlength: 4,
        select: false
    },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product"}]

});

// PASSWORD ENCRYPTION MIDDLEWARE
userSchema.pre('save', async function(next) {
    // Run this function Only if password is actually modified
    // Imagine the user updating the email so at that time we dont need to envrypt the password again 
    if (!this.isModified('password')) return next();

    //Hash the password with the cost of 12// encrypted the password // Here 12 is SALT the password before hashing
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field 
    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function( candidatePassword, userPassord) {
    return await bcrypt.compare(candidatePassword, userPassord);
}

//CREATING MODEL FROM USERSCHEMA
const User = mongoose.model('User', userSchema);

module.exports = User;