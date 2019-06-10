const compression = require('compression')
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(compression())
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/robots.txt', express.static(path.join(__dirname, 'dist/robots.txt')))
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})
app.listen(port)

console.log('server started.... port: ' + port)
