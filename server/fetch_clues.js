const rp = require('request-promise');
const _ = require('lodash');

exports.fetchClues = function(req, res, next) {
			//host selects the size of the game board, otherwise defaults to 5x6
			var columns = req.body.categories || 6;
			var rows = req.body.clues || 5;
			//grab 23 random clues and out of those, randomly pick out 6.
			rp('http://jservice.io/api/random?count=23')
			.then((body) => {
				var array = JSON.parse(body);
				var categories = [];
				array = array.filter(clue => {
					return clue.question !== "" || clue.invalid_count === null;
				});
				_.shuffle(array).forEach(category => {
					if (categories.indexOf(category.category_id) > -1 || categories.length > columns - 1) {
					} else {
						categories.push(category.category_id)
					}
				});
				return categories;
			})
			//once you have your 6 categories, make another call to the API to grab the clues that belong to them.
			.then((categories) => {
				var payload = {categories: [], clues: []};
				for(var i = 0; i < categories.length; i++){
					rp('http://jservice.io/api/category?id=' + categories[i])
					.then((clues) => {
						var clues = JSON.parse(clues);
						payload.categories.push(clues.title);
						var amt = clues.clues.length;
						var begin = getRandomInt(divideByFive(amt)) * 5;
						for(var j = begin; j < begin + rows; j++){
							payload.clues.push(clues.clues[j]);
						}
					})
					.catch(function(err) {console.log(err);})
				}
				//neatly pack them up to be delivered to client
				setTimeout(function(){ res.json({ clues: payload }); }, 1200);
			})
			.catch(function(err) { console.log(err); });
}

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function divideByFive(n){
	return Math.floor(n/5);
}