const { db } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;

  await db.query(
    "SELECT email FROM users WHERE email = (?)",
    [email],
    async (err, result) => {
      if (err) {
        console.error(err);
        return;
      } else {
        if (result.length > 0) {
          return res.render("register", {
            message: "That email is already in use",
          });
        } else if (password !== passwordConfirm) {
          return res.render("register", {
            message: "Passwords do not match",
          });
        }
        const hashedPassword = await bcrypt.hashSync(password, 10);
        db.query(
          "INSERT INTO users SET ?",
          { name, email, password: hashedPassword },
          (err, results) => {
            if (err) {
              console.error(err);
              return;
            } else {
              return res.render("register", {
                message: "User registered",
              });
            }
          }
        );
      }
    }
  );
};
