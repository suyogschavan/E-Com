const express = require("express");
const mongoose = require("mongoose");
const app = express();
const database = "Brushup";
const connection = async () => {
  mongoose.connect(`mongodb://localhost:27017/${database}`);
  const productSchema = new mongoose.Schema({});
  const productModel = new mongoose.model("db1", productSchema);
  const data = await productModel.find({});
  console.warn(data);

};

connection();
app.listen(5000);
