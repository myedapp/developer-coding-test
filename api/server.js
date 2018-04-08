const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()

// middleware
server.use(bodyParser.json())
server.use(cors())

// error handling
server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

// serve requests for files
server.get('/:name', (req, res, next) => {

  // express options for retrieving and sending the requested file
  let options = {
    root: __dirname + '/data/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  }

  // extract the requested file name from the params
  let fileName = `${req.params.name}.json`

  // send the file to the client
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

// listen for client requests on localhost:7000
server.listen(7000, 'localhost', error => {
  if (error) {
    console.error('Error starting server', error)
  } else {
    console.info('Listening on Port 7000')
  }
})

module.exports = server