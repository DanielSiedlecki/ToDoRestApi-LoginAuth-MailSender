const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config_file = require("./config.js");
const dbconfig = require("./db.config");

const app = express();

// Routes Import //
const authRoutes = require("./src/routes/authRoutes.js");

// MongoDB connect ///
mongoose
  .connect(dbconfig.HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Server Config //
const corsOptions = {
  origin: config_file.cors,
};

const PORT = process.env.PORT || config_file.port;

app.use("/api/auth", authRoutes());
app.use(bodyParser.json());
app.use(cors(corsOptions)).listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
