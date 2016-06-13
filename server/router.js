const CreateSession = require('./controllers/createsession');
const VerifyCode = require('./controllers/verifycode');
const path = require('path');
const rp = require('request-promise');
const _ = require('lodash');

module.exports = function(app, io) {

	app.set('etag', false);

	app.get('/', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

	app.get('/bundle.js', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../bundle.js'));
	});

	app.get('/style/style.css', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../style/style.css'));
	});

	app.get('/*', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

	app.get('/node_modules/socket.io-client/socket.io.js', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../node_modules/socket.io-client/socket.io.js'))
	});

	app.get('/favicon.ico', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../style/icon/favicon.ico'));
  });

	app.post('/create', CreateSession.createSession, function(req, res, next) {
		res.json({ session: req.body.session })
	});

	app.post('/linkcode', VerifyCode.verifyCode, function(req, res, next) {
		res.json({ room: req.body.room })
	});

	app.post('/game', function(req, res, next) {
		//Host selects the size of the game board, otherwise defaults to 5x6
		var columns = req.body.categories || 6;
		var rows = req.body.clues || 5;
		//Grab 13 random clues and out of those, randomly pick out 6 of the 13
		rp('http://jservice.io/api/random?count=13')
		.then((body) => {
			var array = JSON.parse(body);
			var categories = [];
			_.shuffle(array).forEach(category => {
				if (categories.indexOf(category.category_id) > -1 || categories.length > columns - 1) {
				} else {
					categories.push(category.category_id)
				}
			})
			return categories
		})
		//Once you have your 6 categories, make another call to the API to grab the clues that belong to them.
		.then((categories) => {
			var payload = {categories: [], clues: []};
			for(var i = 0; i < categories.length; i++){
				rp('http://jservice.io/api/category?id=' + categories[i])
				.then((clues) => {
					var clues = JSON.parse(clues);
					payload.categories.push(clues.title);
					for(var j = 0; j < rows; j++){
						payload.clues.push(clues.clues[j]);
					}
				})
				.catch(function(err) {console.log(err);})
			}
			//Neatly pack them up to be delivered to client
			setTimeout(function(){ res.json({ clues: payload }); }, 1000);
		})
		.catch(function(err) { console.log(err); });
	});
};