const router = require("express").Router();
const userController = require("./controller");
router
  .get("/lists", userController.userList)
  .get("/findOne/:id", userController.findOneUser)
  .post("/create", userController.createUser)
  .put("/update/:id", userController.updateUser)
  .delete("/delete/:id", userController.deleteUser);

module.exports = router;
