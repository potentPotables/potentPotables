const Session = require('../models/session');

exports.closeSession = function(req, res, next) {
	const code = req.body.linkcode;

	Session.find({code: code}).remove().exec();
}