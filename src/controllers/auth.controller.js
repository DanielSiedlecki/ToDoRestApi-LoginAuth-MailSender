const User = require("../models/users");
const jsonwebtoken = require("jsonwebtoken");

exports.getUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});

    res.status(201).json(allUsers);
  } catch (error) {
    res.status(500).json({ error });
  }
};

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
  try {
    const userEmail = req.body.email;
    const oldPassword = req.body.oldpassword;
    const newPassword = req.body.newpassword;

    const user = await User.findByUsername(userEmail);

    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const decodedToken = jsonwebtoken.verify(token, process.env.JWT_KEY);
    if (!decodedToken || decodedToken.id !== user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    if (oldPassword === newPassword) {
      return res.status(400).json({
        message: "The new password cannot be the same as the old password",
      });
    }

    await user.changePassword(oldPassword, newPassword);

    res.status(200).json({ message: "Successfully changed password" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while changing the password" });
  }
};
