// const express = require("express");
// const mongoose = require("mongoose");
import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;
//database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-practise");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log(`database connection successfully connected`);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error);
  }
}
bootstrap();
