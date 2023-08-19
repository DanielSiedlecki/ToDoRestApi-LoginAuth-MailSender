const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config_file = require("./config.js");

const app = express();

// Routes Import //
const authRoutes = require("./src/routes/authRoutes.js");

const corsOptions = {
  origin: config_file.cors,
};

const PORT = process.env.PORT || config_file.port;

app.use("/api/auth", authRoutes());
app.use(bodyParser.json());
app.use(cors(corsOptions)).listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
