// require dependencies and database file.
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./mongoUtils');


var newUser = {
	username: 'peter',
	password: '1234'
}


User.create(newUser)


// connnect to database and server.
mongoose.connect('mongodb://localhost/users');
var app = express();
// use dependencies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.post('/signin', function(req, res){
	var username = req.body.username

	User.findOne({username: username})
		User.compare()
		.then(function(boolean){
			if(!boolean){
				error
			}
			res.josn(boolen) 
		})


	app.json('hello world')
});





app.get('/home', function(req, res){
	app.json('hello world')
});
// listen for connection
app.listen(8080, function(){
	console.log('Listening on 8080');
});