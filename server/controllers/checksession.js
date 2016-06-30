const Session = require('../models/session');

exports.checkSession = function(req, res, next) {
	const code = req.body.linkcode;
	console.log(code);
	Session.findOne({code: code}, function(err, existingSession) {
		if(err) { return next(err) }

		if(!existingSession.hostExists) {
			return res.status(422).send({error: 'A host is required before the session begins' });
		}

		req.body.room = existingSession.code;
		Session.find({code: code}).remove().exec();
		next();
	});

}