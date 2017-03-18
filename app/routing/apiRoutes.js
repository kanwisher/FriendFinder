const friends = require("../data/friends.js");



module.exports = function(app){


app.get("/api/friends", function(req, res){
res.json(friends);
});


app.post("/api/new", function(req, res){
	console.log(req.body);
	friends.push(req.body);
	res.end("hello");

});






};