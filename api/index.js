const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const userRoute = require("./routes/users");
const multer=require("multer");


dotenv.config();
//for sending json object inside body
app.use(express.json());




mongoose
  .connect("mongodb://localhost:27017/blog",
    { useNewUrlParser: true },
    console.log("connect to MongoDB")
  )

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images");
  },
  filename:(req,file,cb)=>{
    cb(null, "hello.jpg");
  }
});

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("file has been uploaded");
});


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/users", userRoute);



app.listen("5000", () => {
  console.log("Backend is running.");

})
