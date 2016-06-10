//Main starting point of the application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const server = http.createServer(app);
const io = require('socket.io')(server);

var db_url = process.env.MONGODB_URI || 'mongodb://localhost:sessions/contestants';
mongoose.connect(db_url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Successfully connected");
});

const port = process.env.port || 3000;
server.listen(port);
console.log('listening on port:', port);