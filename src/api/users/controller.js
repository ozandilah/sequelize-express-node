const userService = require("../../../services/user.service");

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

module.exports = {
  userList,
};
