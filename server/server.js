//Main starting point of the application
"use strict"

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const server = http.createServer(app);
const io = require('socket.io')(server);
const Sockets= require('./sockets_server');
const MONGODB_URI= 'mongodb://heroku_jrvjd4m6:uqf4on3flnlf2haah5opugf4nd@ds025782.mlab.com:25782/heroku_jrvjd4m6';


var db_url = process.env.MONGODB_URI || 'mongodb://localhost:sessions/sessions';
mongoose.connect(MONGODB_URI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Successfully connected");
});


//app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app, io);

io.on('connection', function(socket){
  var clients= io.sockets.adapter;
  var ioAccess= io.sockets
  Sockets.initSockets(socket, clients, ioAccess);
});
//Server set up

const port = process.env.PORT || 3000;
server.listen(port);
console.log('listening on port:', port);