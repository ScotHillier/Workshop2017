var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('ecmascript', { title: 'ES2017 Modules' });
});

module.exports = router;
