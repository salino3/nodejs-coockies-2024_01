const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const app = express();

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to the MySQL database!");
  }
});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>My app Node.js</title>
          <style>
            h1 {
              color: blue;
            }
          </style>
        </head>
        <body>
          <h1>Hello, World!</h1> 
           <h2 id="h2"></h2>
           <p>App port: <strong id="port"> </strong></p>

        <script>
       const h2 = document.getElementById('h2');
       const port = document.getElementById('port');
       h2.innerHTML = "This is a h2"
       port.innerHTML = "${port}"
          </script>
        </body>
      </html>
    `);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
