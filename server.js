// Application Server
// ------------------

// This is our single `node.js` process, which will provide us all 
// of our server support and `socket.io` communication

//###dependencies
// The server won't do everything for us out of the box, a few packages 
// are required to make this process a little easier. All of these can 
// be installed with `npm`
var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app)
  , io = require('socket.io')
  , io = io.listen(server)
  , port = 9090

// Socket listeners
// ----------------

//###connection
// A new `socket.io` connection has been established, lets let everyone 
// connected know about the new client, then attatch all of our listeners 
// on the connecting client's socket object
io.sockets.on('connection', function(socket) {

  // Someone connected
  socket.broadcast.emit('connected', socket.id)
  
  // Re-broadcast the message
  socket.on('message', function(data) {
    socket.broadcast.emit('message', {
      id: socket.id
    , msg: data
    })
  })

  // Someone has disconnected
  socket.on('disconnect', function() {
    io.sockets.emit('disconnected', socket.id)
  })
})

// Express setup
// -------------

// Configure the `express` server with all of the relevant options, 
// namely the location of our public static files, and the template 
// engine that we will be parsing our dynamic HTML with
app.configure(function() {
  app.use(express.static(__dirname + '/public'))
  app.use('/docs', express.static(__dirname + '/docs'))
  app.engine('jade', require('jade').__express)
})

// Routes
// ------

// Create a route handler for the application, in this example we will 
// only need a single route, `GET /` will be where the index file gets 
// processed and served to the client
app.get('/', function(req, res) {
  res.render('index.jade')
})


// Start server
// ------------

// Tell the `express` server to listen to the specified `port`, although 
// the server is technically running, it wont be doing anything unless we 
// tell it to listen for connections
server.listen(port, function() {
  console.log('Application listening on port: ' + port)
})
