const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const { examplePage } = require("./example");

dotenv.config();
const app = express();
const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));
app.set("view engine", "hbs");

const port = process.env.PORT || 5000;

app.get("/example", (req, res) => {
  res.status(200).send(examplePage);
});

app.get("/", (err, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
