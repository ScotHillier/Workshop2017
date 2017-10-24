var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('require', { title: 'Require JS Modules' });
});

module.exports = router;
