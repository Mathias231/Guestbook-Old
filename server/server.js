const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Put's MongoDB connection string into variable and create connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});