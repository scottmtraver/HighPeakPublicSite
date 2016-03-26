var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'High Peak Solutions - Home' });
});

router.get('/About', function(req, res) {
  res.render('About', { title: 'High Peak Solutions - About' });
});

module.exports = router;
