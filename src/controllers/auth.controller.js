const User = require("../models/users");
const jsonwebtoken = require("jsonwebtoken");
const passport = require("passport");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email });
    await User.register(user, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const token = jsonwebtoken.sign({ id: req.user.id }, process.env.JWT_KEY, {
      expiresIn: 3600,
    });

    res.status(201).json({ message: "Login succes", token });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

exports.changePassword = async (req, res) => {
  const userEmail = req.body.email;
  const oldPassword = req.body.oldpassword;
  const newPassword = req.body.newpassword;

  User.findByUsername(userEmail, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      user.changePassword(oldPassword, newPassword, function (err) {
        if (err) {
          return res.status(500).send(err);
        } else {
          res.send("Successfully changed password");
        }
      });
    }
  });
};
