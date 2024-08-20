const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log("MongoDB connection Error", err);
  });
