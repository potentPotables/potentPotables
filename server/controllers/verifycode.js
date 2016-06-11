const Session = require('../models/session');

exports.verifyCode = function(req, res, next) {
	console.log('inside verifyCode', req.body);
	const code = req.body.linkcode;

	Session.findOne({code: code }, function(err, existingSession) {
		if(err) { return console.log('this should console log'); }

		if(existingSession) {
			return console.log('YIPPY!');
		}

		console.log('no session found');
	})
}