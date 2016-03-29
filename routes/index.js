var express = require('express');
var router = express.Router();
var path = require('path');
var mime = require('mime');
var fs = require('fs');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'High Peak Solutions - Home' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'High Peak Solutions - About' });
});

router.get('/blog', function(req, res) {
  res.render('blog', { title: 'High Peak Solutions - Blog' });
});

router.get('/blog/:seo', function(req, res) {
  var seo = req.params.seo;
  res.render('posts/' + seo, { title: 'High Peak Solutions - Blog' });
});

//downloads
router.get('/download/:file', function(req, res){
  var file = 'public/downloads/' + req.params.file;
  res.download(file); // Set disposition and send it.
});

module.exports = router;
