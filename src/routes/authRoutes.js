module.exports = () => {
  var router = require("express").Router();

  const bodyParse = require("body-parser");

  // All Users View //

  router.get("/users", (req, res) => {
    res.json({ message: "Work" });
  });

  // Register //
  router.post("/register", (req, res) => {
    res.json({ message: "Work" });
  });

  // Login //
  router.post("/login", (req, res) => {
    res.json({ message: "Work" });
  });

  // Change Password //
  router.get("/change/id", (req, res) => {
    res.json({ message: "Work" });
  });

  router.put("/change/id", (req, res) => {
    res.json({ message: "Work" });
  });

  return router;
};
