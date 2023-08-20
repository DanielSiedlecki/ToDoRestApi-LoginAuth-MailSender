const passport = require("passport");
const User = require("../models/users");

module.exports = () => {
  passport.use(User.createStrategy());
};
