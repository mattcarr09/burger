var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get('/', function(req, res) {
	res.redirect('/index');
});


router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burger: data};
		console.log(hbsObject);
		res.render(hbsObject);
	});
});


router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});


router.put('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

module.exports = router;