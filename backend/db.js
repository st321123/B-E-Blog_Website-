const express = require("express");
const mongoose = require("mongoose")

require("dotenv").config();

const Url = process.env.DB_URL;


mongoose.connect(Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  ssl: true // Ensure SSL is enabled
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));
