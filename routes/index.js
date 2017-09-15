var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('index.html', { root: __dirname + '/../src/'} );
});

router.get('/home', function(req, res, next){
	res.sendFile('home.html', { root: __dirname + '/../src/'} );
});

router.get('/operation', function(req, res, next){
	res.sendFile('operation.html', { root: __dirname + '/../src/'});
});

router.get('/continuous_run', function(req, res, next){
	res.sendFile('continuous_run.html', { root: __dirname + '/../src/'});
});

router.get('/jogging', function(req, res, next){
	res.sendFile('jogging.html', { root: __dirname + '/../src/'} );
})

router.get('/change_password', function(req, res, next){
	res.sendFile('change_password.html', { root: __dirname + '/../src/'} );
})

module.exports = router;
