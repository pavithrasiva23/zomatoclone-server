//main-packages
require("dotenv").config()
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
// custom-packages
const apiRouter = require("./routers/apiRouter");
// rest program
const app = express();
//const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));//get post data


app.use("/api", apiRouter);
//const MONGODB_URI = "mongodb://127.0.0.1:27017/zomatoapi"; // pass zomatoapi without space after string==>(string+url+databasename)
//const MONGODB_URI = "mongodb+srv://pavithrasiva23:pavithrasiva23@zomato-api.mztscyf.mongodb.net/zomatoapi?retryWrites=true&w=majority"
console.log("conecting to db...");
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log("connected!!!");
      console.log(`zomato api is running on http://localhost:${process.env.PORT}`); // express js
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1); //exit nodejs-if error it terminates connection
  });