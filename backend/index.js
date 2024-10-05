const express = require("express")
const {Url} = require('./db')
const app = express();
const signup = require("./controllers/Signup");
const signin = require('./controllers/Signin');
const user = require("./controllers/User");
const userPost = require("./controllers/Post/UserPost");
const createPost = require("./controllers/Post/CreatePost");
const cors  = require("cors");

// app.use(cors({
//   origin: ["https://deploy-mern-1whq.vercel.app"], // Allow requests from this origin
//   methods: ["POST", "GET"], // Allow only these HTTP methods
//   credentials: true // Allow cookies and authorization headers to be included
// }));

require('dotenv').config();
app.use(express.json());


const router = express.Router();
const PORT = process.env.PORT || 3000;

console.log(Url);

app.use("/signup",signup);
app.use('/signin',signin);
app.use('/user',user);
app.use('/createPost',createPost);
app.use('/user-posts', userPost);



app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
    
})


