var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.isAuthenticated()) {
		res.render('profile', { user : req.user });
	} else {
		res.render('index', { title: 'SpeakEZ' });
	}
});

router.get('/profile', isLoggedIn, function(req, res) {
	res.render('profile', {
		user : req.user
	});
});

router.get('/bingo', isLoggedIn, function(req, res) {
	res.render('bingo', {
		user : req.user,
	})
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}

module.exports = router;