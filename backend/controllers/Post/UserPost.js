const express = require("express");
const {Post} = require("../../models/post")


const app = express();
app.use(express.json());
const router = express.Router();

router.get("/", async (req,res)=>{

    const id = req.query.id;

    try{
    const db = await Post.find({author: id});
    // console.log(db);
    
    if(!db.length)
    {
        res.status(400).json({
            msg:"No posts "
        })
    }
 
    res.status(200).json({
        db,msg:"Success"
    })
  }catch(er)
  {
    res.status(404).json({
        er
    })
  }
})

module.exports = router;