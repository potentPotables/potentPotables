const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
	code: String,
	hostExists: Boolean,
});

const SessionClass = mongoose.model('session', sessionSchema);

module.exports = SessionClass;