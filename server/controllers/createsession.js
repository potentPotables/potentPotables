const Session = require('../models/session');

exports.createSession = function(req, res, next) {
	const session = new Session({});
	session.save(function (err, cb) {
		if(err) console.log(err);
	})
}