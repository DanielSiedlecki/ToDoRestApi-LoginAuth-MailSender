const express = require("express");
const cors = require("cors");
const config_file = require("./config.js");

const app = express();

const corsOptions = {
  origin: config_file.cors,
};

const PORT = process.env.PORT || config_file.port;

app.use(cors(corsOptions)).listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
