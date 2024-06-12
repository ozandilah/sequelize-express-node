const router = require("express").Router();
const userController = require("./controller");
router.get("/lists", userController.userList);

module.exports = router;
