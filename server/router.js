const CreateSession = require('./controllers/createsession');
const path = require('path');

module.exports = function(app, io) {

	app.get('/', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

	app.get('/bundle.js', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../bundle.js'));
	});

	app.get('/style/style.css', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../style/style.css'));
	});

	app.get('/node_modules/socket.io-client/socket.io.js', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../node_modules/socket.io-client/socket.io.js'))
	});

	app.post('/create', CreateSession.createSession, function(req, res, next) {
		console.log('hello');
		res.json({ session: req.body.session })
	});
}