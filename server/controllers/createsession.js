const Session = require('../models/session');

exports.createSession = function(req, res, next) {
	const session = new Session({code: null});
	const str = String(session._id);
	session.code = str.slice(-5);

	session.save(function (err) {
		if(err) return console.log(err), undefined;
		req.body.session = session;
		next();
	});
}