var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.post('/projects', function(req, res) {
  console.log(req.body);
  if (req.body.name != '' && req.body.description != '') {
    res.send({
      data: req.body,
      success: true,
      message: 'Success'

    });
  } else {
    res.send({
      data : req.body,
      success: false,
      message: 'Error'
    })
  }
});

module.exports = router;
