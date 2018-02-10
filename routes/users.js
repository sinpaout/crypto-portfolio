var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users/index', { title: 'Users' });
});

router.get('/add', function(req, res, next) {
  res.send('here to add new user');
});

router.get('/edit', function(req, res, next) {
  res.send('here to edit new user');
});

module.exports = router;
