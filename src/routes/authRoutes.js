const authController = require("../controllers/auth.controller");
const passport = require("passport");
module.exports = () => {
  var router = require("express").Router();

  // All Users View //

  router.get("/users", (req, res) => {
    res.json({ message: "Work" });
  });

  // Register //
  router.post("/register", authController.createUser);

  // Login //
  router.post(
    "/login",
    passport.authenticate("local", { session: false }),
    authController.loginUser
  );

  // Change Password //
  router.post("/change", authController.changePassword);

  router.get("/change/id", (req, res) => {
    res.json({ message: "Work" });
  });

  return router;
};
