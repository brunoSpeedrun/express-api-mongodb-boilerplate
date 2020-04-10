const app = require('./src/app')

function normalizePort(val) {
  const port = parseInt(val, 10)

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

const port = normalizePort(process.env.PORT || '3000')

app.listen(port, () => console.log(`Listening on port ${port}`))
