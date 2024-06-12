const userList = (req, res) => {
  res.status(200).send({
    msg: "Success",
    data: "User List",
  });
};

module.exports = {
  userList,
};
