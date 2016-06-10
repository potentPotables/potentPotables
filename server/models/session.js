const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
//the only thing we need from a session is the unique ID provided by mongoDB, so there's not going to be anything here
});

const SessionClass = mongoose.model('session', sessionSchema);

module.exports = SessionClass;