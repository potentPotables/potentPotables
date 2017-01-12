const Session = require('../models/session');

exports.verifyCode = function(req, res, next) {
	const code = req.body.linkcode.toLowerCase();
	const user = req.body.user;

	Session.findOne({code: code }, function(err, existingSession) {
		if(err) { return next(err); }

		if(!existingSession) {
			return res.status(422).send({error: 'No such session exists' });
		}

		if(user === 'host') {
			if(!existingSession.hostExists){
				existingSession.hostExists = true;
				existingSession.save();
			} else {
				req.body.room = existingSession.code;
				req.body.host = existingSession.hostExists;
				next();
			}
		}

		req.body.room = existingSession.code;
		next();
	});
}