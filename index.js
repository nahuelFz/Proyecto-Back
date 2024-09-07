const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const { method, url } = req
  if (method === 'GET') {
    if (url === '/') {
      // Servir el archivo home.html desde la carpeta views
    } else if (url === '/login') {
      // Servir el archivo login.html desde la carpeta views
    } else if (url === '/register') {
      // Servir el archivo register.html desde la carpeta views
    } else {
      // Servir archivos estáticos desde la carpeta public (imagenes y css) { 'Content-Type': getContentType(filePath) }
    }
  } else if (method === 'POST') {
    if (url === '/login' || url === '/register') {
      // Redirigir al usuario a la página de inicio con un código de estado 302
    } else {
      // Enviar respuesta 404 para rutas POST no válidas
    }
  }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
