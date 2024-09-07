import { createServer } from 'http'
import fs from 'fs'
import { extname as _extname } from 'path'

const server = createServer((req, res) => {
  const filePath = req.url === '/' ? '/views/home.html' : req.url
  const extname = _extname(filePath)
  let contentType = 'text/html'
  fs.readFile(
    path.join(__dirname, 'public', filePath, (err, content) => {
      if (err) {
        // mostrar 500
      } else {
        //mostrar 200 con el contenido por res.end y formatear a utf8
      }
    })
  )
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`)
})
