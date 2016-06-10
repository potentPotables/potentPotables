const CreateSession = require('./controllers/createsession');
const path = require('path');

module.exports = function(app, io) {

	app.get('/', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../index.html'));
	})

	app.post('/create', CreateSession.createSession, function(req, res, next) {
		res.json({ session: req.body.session })
	})
}