const path = require('path')

exports.getContentType = (filePath) => {
  const extname = path.extname(filePath)
  switch (extname) {
    case '.js':
      return 'text/javascript'
    case '.css':
      return 'text/css'
    case '.json':
      return 'application/json'
    case '.png':
      return 'image/png'
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.svg':
      return 'image/svg+xml'
    default:
      return 'text/plain'
  }
}
