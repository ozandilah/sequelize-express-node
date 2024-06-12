const router = require("express").Router();
const userRoute = require("../users/route");

const RouteList = [
  {
    path: "/users",
    route: userRoute,
  },
];

RouteList.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
