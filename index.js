const http = require('http')
const fs = require('fs')
const path = require('path'); //Modulo para rutas
const {getContentType} = require('./getContentType'); //Importar contentType

const server = http.createServer((req, res) => {
  const { method, url } = req
  if (method === 'GET') {
    if (url === '/') {
      // Servir el archivo home.html desde la carpeta views
      const filePath = path.join(__dirname, 'views', 'home.html');
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error interno del servidor');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      });

    } else if (url === '/login') {
      // Servir el archivo login.html desde la carpeta views
      const filePath = path.join(__dirname, 'views', 'login.html');
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error interno del servidor');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      });

    } else if (url === '/register') {
      // Servir el archivo register.html desde la carpeta views
      const filePath = path.join(__dirname, 'views', 'register.html');
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error interno del servidor');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      });

    } else {
      // Servir archivos estáticos desde la carpeta public (imagenes y css) { 'Content-Type': getContentType(filePath) }
      // Construimos la ruta del archivo eliminando cualquier parámetro de consulta
      const cleanUrl = url.split('?')[0];
      const filePath = path.join(__dirname, 'public', cleanUrl);
      
      // Verificamos si el archivo existe
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          // Si el archivo no existe, enviamos un 404
          res.writeHead(404);
          res.end('Archivo no encontrado');
          return;
        }

        // Si el archivo existe, lo leemos y enviamos
        fs.readFile(filePath, (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end('Error interno del servidor');
            return;
          }
          // Obtenemos el tipo de contenido usando nuestra función auxiliar
          res.writeHead(200, { 'Content-Type': getContentType(filePath) });
          res.end(content);
        });
      });
    } 
  } else if (method === 'POST') {
    if (url === '/login' || url === '/register') {
      // Redirigir al usuario a la página de inicio con un código de estado 302
      res.writeHead(302, { Location: '/' });
      res.end();
    } else {
      // Enviar respuesta 404 para rutas POST no válidas
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Ruta no válida');
    }
  }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
