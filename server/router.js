const CreateSession = require('./controllers/createsession');
const VerifyCode = require('./controllers/verifycode');
const CheckSession = require('./controllers/checksession');
const FetchClues = require('./fetch_clues');
const SendEmail = require('./sendgrid');
const path = require('path');
const express = require('express');

module.exports = function(app, io) {
	app.use(express.static(path.join(__dirname, '../public')));

	app.get('/', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

	app.get('/favicon.ico', function(req, res) {
		res.sendFile(path.resolve(__dirname + 'favicon.ico'));
	});

	app.get('/bundle.js', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../bundle.js'));
	});

	app.get('/node_modules/socket.io-client/socket.io.js', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../node_modules/socket.io-client/socket.io.js'));
	});

	app.post('/create', CreateSession.createSession, function(req, res, next) {
		res.json({ session: req.body.session });
	});

	app.post('/linkcode', VerifyCode.verifyCode, function(req, res, next) {
		res.json({ room: req.body.room , host: req.body.host});
	});

	app.post('/check', CheckSession.checkSession, function(req, res, next) {
		res.json({ room: req.body.room });
	});

	app.post('/hire', function(req, res) {
		SendEmail.sendEmail(req.body);
	});

	app.post('/game', FetchClues.fetchClues);

	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

};