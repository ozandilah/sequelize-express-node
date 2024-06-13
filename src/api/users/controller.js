const userService = require("../../../services/user.service");
const bcrypt = require("bcryptjs");

const userList = async (req, res) => {
  try {
    const data = await userService.getUsers();
    res.status(200).send({
      data: data,
      msg: "success",
      status: 200,
    });
  } catch (error) {
    res.status(500).send({
      data: null,
      msg: "error",
      status: 500,
      error: error,
    });
  }
};

// const findOneUser = async (req, res) => {
//   const user_id = req.params.id;
//   try {
//     const data = await userService.findOneById(user_id);
//     if (data) {
//       res.status(200).send({
//         data: user,
//         msg: "success",
//         status: 200,
//       });
//     } else {
//       res.status(404).send({
//         data: null,
//         msg: "User not found",
//         status: 404,
//       });
//     }
//   } catch (error) {
//     res.status(500).send({
//       data: null,
//       msg: "error",
//       status: 500,
//       error: error,
//     });
//   }
// };

const findOneUser = async (req, res) => {
  try {
    const data = await userService.findOneById(req.params.id);
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ data: null, msg: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ data: null, error: error.message });
  }
};
const createUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const pw = req.body.password;
  const hashedPassword = await bcrypt.hash(pw, salt);

  const userBody = {
    fname: req.body.fname,
    lname: req.body.lname,
    sex: req.body.sex,
    phone: req.body.phone,
    username: req.body.username,
    password: hashedPassword,
  };

  try {
    const data = await userService.create(userBody);
    res.status(201).send({
      data: data,
      msg: "User created successfully",
      status: 201,
    });
  } catch (error) {
    res.status(500).send({
      data: null,
      msg: "error",
      status: 500,
      error: error,
    });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updateData = {
    fname: req.body.fname,
    lname: req.body.lname,
    sex: req.body.sex,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const data = await userService.update(updateData, userId);
    res.status(200).json({
      data: data,
      message: "Sukses mengupdate data",
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: "Gagal mengupdate data",
      error: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deleted = await userService.deleted(userId);
    if (deleted === 0) {
      res.status(404).send({
        data: null,
        msg: "User not found",
        status: 404,
      });
    } else {
      res.status(200).send({
        data: null,
        msg: "User deleted successfully",
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).send({
      data: null,
      msg: "Error deleting user",
      status: 500,
      error: error,
    });
  }
};

module.exports = {
  userList,
  findOneUser,
  createUser,
  updateUser,
  deleteUser,
};
