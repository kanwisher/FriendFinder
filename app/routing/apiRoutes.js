const friends = require("../data/friends.js");



module.exports = function(app){


app.get("/api/friends", function(req, res){
res.json(friends);
});


app.post("/api/new", function(req, res){
let arrayTest = [];

friends.forEach(function(value){
	let difference = 0;
	for(let i = 0; i < value.scores.length; i ++){
		difference += Math.abs(value.scores[i] - req.body.scores[i]);
	}
	arrayTest.push(difference);
	
});
	let bestMatch = friends[arrayTest.indexOf(Math.min(...arrayTest))];	
	console.log(bestMatch);
	friends.push(req.body);
	res.send(bestMatch);

});






};