var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('internal', { title: 'Internal Modules' });
});

module.exports = router;
