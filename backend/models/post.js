const mongoose = require("mongoose");



const postSchema = mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    description:{
        type:String,
        required :true
    },
    title:{
        type:String,
        required :true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = {Post};