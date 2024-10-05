const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    bio: {
        type: String,
        default: '' 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

const User = mongoose.model("User", userSchema);
module.exports = {User};