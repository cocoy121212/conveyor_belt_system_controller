var express = require('express');
var router = express.Router();
var accountController =  require('../controllers/accountController');

router.post('/login', accountController.login);
router.get('/logout', accountController.logout);
router.post('/signup', accountController.signup);

module.exports = router;