const express = require("express");
const { db } = require("./db");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

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
