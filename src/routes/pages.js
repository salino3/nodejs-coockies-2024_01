const express = require("express");
const { examplePage } = require("./example");

const router = express.Router();

// Example router
router.get("/example", (req, res) => {
  res.status(200).send(examplePage);
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
