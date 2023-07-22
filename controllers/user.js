const User = require("../models/user");

// Create a user
exports.createUser = async (req, res, next) => {
  const { name, email, phone } = req.body;
  try {
    const createdUser = await User.create({
      name: name,
      email: email,
      phone: phone,
    });
    console.log(createdUser);
    res.status(200).json(createdUser);
  } catch (err) {
    console.log(err);
  }
};

// Get all the users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

// Get user by id
exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

// Edit user by id
exports.editUser = async (req, res, next) => {
  const userId = req.params.userId;
  const { name, email, phone } = req.body;
  try {
    const user = await User.findByPk(userId);
    user.name = name;
    user.email = email;
    user.phone = phone;
    const userData = await user.save();
    console.log(userData);
  } catch (err) {
    console.log(err);
  }
};

// Delete user by id
exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    const deletedUser = await user.destroy();
    console.log("User Deleted :", deletedUser.toJSON());
    res.status(200);
  } catch (err) {
    console.log(err);
  }
};
