require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT || 80

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, () => {
    console.log(`Server started: http://localhost:${port}`)
})