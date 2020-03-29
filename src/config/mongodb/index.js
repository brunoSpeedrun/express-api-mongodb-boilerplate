const mongoose = require('mongoose')

function createConnectionString() {
  const { DB_HOST, DB_PORT, DB_NAME } = process.env

  return `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
}

const connectionString = createConnectionString()

module.exports = {
  connect() {
    const { DB_USER, DB_PASSWORD } = process.env

    mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      user: DB_USER,
      pass: DB_PASSWORD
    })
  }
}
