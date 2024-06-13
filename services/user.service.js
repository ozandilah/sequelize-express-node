const db = require("../models");
const user_model = db.Users;

exports.getUsers = async () => {
  try {
    const users = await user_model.findAll();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
