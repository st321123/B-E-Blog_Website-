const express = require("express");
const { Post } = require("../models/post");
const app = express();

app.use(express.json());
const router = express.Router();


router.get('/', async (req,res)=>{

    try{
         const post = await Post.find();
        //  console.log(post);

         res.status(200).json({
            msg:"Success"
         })
         
    }

    catch(error)
    {
        res.status(400).json({
            msg:error
        })
    }
})
module.exports = router;
