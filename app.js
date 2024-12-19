const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));
// Parse URL-encoded body (as sent HTML forms)
app.use(express.urlencoded({ extend: false }));
// Parse JSON body
app.use(express.json());
app.set("view engine", "hbs");

const port = process.env.PORT || 5000;

// Define routes
app.use("/", require("./src/routes/pages"));
app.use("/auth", require("./src/routes/auth"));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
