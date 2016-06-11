const Session = require('../models/session');

exports.verifyCode = function(req, res, next) {
	const code = req.body.linkcode;

	Session.findOne({code: code }, function(err, existingSession) {
		if(err) { return next(err); }

		if(existingSession) {
			req.body.room = existingSession.code;
			next();
		}
	});
}