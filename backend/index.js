const express = require("express")
const {Url} = require('./db')
const app = express();
const signup = require("./controllers/Signup");
const signin = require('./controllers/Signin');
const user = require("./controllers/User");
const userPost = require("./controllers/Post/UserPost");
const createPost = require("./controllers/Post/CreatePost");
const singlePost = require("./controllers/Post/SinglePost");
const cors  = require("cors");

app.use(cors());
require('dotenv').config();
app.use(express.json());


const router = express.Router();
const PORT = process.env.PORT || 3000;

// console.log(Url);

app.use("/signup",signup);
app.use('/signin',signin);
app.use('/user',user);
app.use('/createPost',createPost);
app.use('/user-posts', userPost);
app.use('/user-post-id',singlePost)



app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
    
})


