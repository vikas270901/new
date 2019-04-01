var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("HELLO HEROKU...");
});

app.listen(process.env.PORT, process.env.ID, function(req, res){

});