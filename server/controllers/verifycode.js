const Session = require('../models/session');

exports.verifyCode = function(req, res, next) {
	console.log('inside verifyCode', req.body);
	const code = req.body.linkcode;
	const user = req.body.user;

	if(user === 'host'){
		Session.findOne({code: code}, function(err, existingSession){
			
		})
	}

	Session.findOne({code: code }, function(err, existingSession) {
		if(err) { return next(err); }

		if(!existingSession) {
			return res.status(422).send({error: 'No such session exists' });
		}

		req.body.room = existingSession.code;
		next();
	});
}