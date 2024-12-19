require("dotenv").config();
const port = process.env.PORT || 5000;

const examplePage = `
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
    `;

module.exports = { examplePage };
