const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const bugRoutes = require("./routes/bugRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bugs", bugRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
