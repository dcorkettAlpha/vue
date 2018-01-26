var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/skills', function(req, res) {
  res.send({
    skills: ['Express', 'vue', 'js', 'scss']
  });
});

module.exports = router;
