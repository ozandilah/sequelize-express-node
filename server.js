const express = require("express");
const app = express();
const apiRoute = require("./src/api/routers/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Api already!");
});

app.use("/api", apiRoute);

app.listen(3000, "127.0.0.1", () => console.log("Server started on port 3000"));
