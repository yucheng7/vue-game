import express, { Request, Response, Application, Router } from "express";
import mongoose from "mongoose";

// 連接MongoDB Atlas
const uri: string =
  "mongodb+srv://aa102133395:R3V0a7AqqkL4MoaK@cluster0.vunkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, {})
  .then((res) => {
    console.log("已連線到資料庫");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const user = new User({
  name: "test",
  email: "hYkI1@example.com",
  password: "123456",
});
user.save();

export default userRoutes;
