const express = require("express");
const mongoose = require("mongoose")

require("dotenv").config();

const Url = process.env.DB_URL;

mongoose.connect(Url);

const db = mongoose.connection;


db.on('error', (error)=>{console.log(error);
});
db.once('open', ()=>{ console.log("database connected");
});

