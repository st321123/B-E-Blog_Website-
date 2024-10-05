const express = require("express");
const app = express();
const zod = require("zod");
const router = express.Router();
const {User} = require('../models/user');
app.use(express.json());

const userSchema = zod.object({
    author: zod.string().min(1),  
    password: zod.string().min(1),  
    email: zod.string().email(),  
    bio: zod.string().optional().default(''),  
    createdAt: zod.date().default(() => new Date())  
});

router.post("/",async (req,res)=>{
    const {author,password,email,bio,createdAt} = req.body;
    const response = userSchema.safeParse({author:author,password:password,email:email,bio:bio,createdAt:createdAt});
   

    if(!response.success)
    {
        return res.status(400).json({
            msg:"false"
        })
    }
    try{
    const db = await User.create({
        author:author,password:password,email:email,bio:bio,createdAt:createdAt
    })  
    res.status(200).json({
        msg:"Sucess"
    });
    }
    catch(error)
    {
        res.status(400).json({
            msg:error
        })
    }
    
   
    

});

module.exports = router;