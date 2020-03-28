const express = require('express')
const app = express()

app.use('/', (req, res) => {
    res.json({
        code: 200,
        message: 'It\'s works!'
    })
})

module.exports = app