const express = require("express");
const { Post } = require("../models/post");
const app = express();

app.use(express.json());
const router = express.Router();
router.get('/', async (req, res) => {
    
    try {
        const posts = await Post.find().populate('author', 'author').exec();  // 'name' field from User schema
       
        
        res.status(200).json({
            msg: "Success",
            posts: posts
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg: error.message
        });
    }
});
module.exports = router;
