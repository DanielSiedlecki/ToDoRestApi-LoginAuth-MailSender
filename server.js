const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config_file = require("./src/config/config.js");
const dbconfig = require("./src/config/db.config");
const passport = require("./src/config/passport.js");

const app = express();

require("dotenv").config();

// Routes Import //
const authRoutes = require("./src/routes/authRoutes.js");
const taskRoutes = require("./src/routes/toDoRoutes.js");

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

// Passport config //

passport();

// Server Config //
const corsOptions = {
  origin: config_file.cors,
};

const PORT = process.env.PORT || config_file.port;
app.use(bodyParser.json());
app.use("/api/auth", authRoutes());
app.use("/api/task", taskRoutes());

app.use(cors(corsOptions)).listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
