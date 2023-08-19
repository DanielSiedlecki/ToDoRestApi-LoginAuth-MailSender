const authController = require("../controllers/auth.controller");

module.exports = () => {
  var router = require("express").Router();

  // All Users View //

  router.get("/users", (req, res) => {
    res.json({ message: "Work" });
  });

  // Register //
  router.post("/register", authController.createUser);

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
