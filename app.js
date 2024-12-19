const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.status(200).send(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Mi Aplicación Node.js</title>
          <style>
            h1 {
              color: blue;
            }
          </style>
        </head>
        <body>
          <h1>Hello, World!</h1> 
           <h2 id="h2"></h2>

        <script>
       const h2 = document.getElementById('h2');
       h2.innerHTML = "This is a h2"
          </script>
        </body>
      </html>
    `);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
