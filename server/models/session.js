const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
	code: String
});

const SessionClass = mongoose.model('session', sessionSchema);

module.exports = SessionClass;