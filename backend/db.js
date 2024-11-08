const express = require("express");
const mongoose = require("mongoose")
const {User} = require('./models/user')

require("dotenv").config();

const Url = process.env.DB_URL;

<<<<<<< HEAD
mongoose.connect(Url);

const db = mongoose.connection;


db.on('error', (error)=>{console.log(error);});
db.once('open', async()=>{ console.log("database connected");
        // try {
        //     // Update users to set default follower and following counts
        //     const result = await User.updateMany({}, { 
        //         $set: { 
        //             followerCount: 0, 
        //             followingCount: 0 
        //         }
        //     });
    
        //     console.log(`${result.nModified} users updated with default followerCount and followingCount.`);
        
        // } catch (error) {
        //     console.error("Error updating users:", error);
        // }

    // try {
    //     const copyResult = await User.updateMany(
    //         { author: { $exists: true } },
    //         [{ $set: { userName: "$author" } }] // Uses aggregation pipeline to copy value
    //       );
    //       console.log("Copied 'author' to 'userName':", copyResult);
      
    //       // Step 2: Remove the "author" field
    //       const unsetResult = await User.updateMany(
    //         { author: { $exists: true } },
    //         { $unset: { author: "" } }
    //       );
    //       console.log("Removed 'author' field:", unsetResult);
    //     } catch (error) {
    //       console.error("Error during field update:", error);
    //     }
     
});
=======
>>>>>>> 178399d59b5e3c79d857fcd74150e6b24b3b9db9

mongoose.connect(Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true // Ensure SSL is enabled
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));
