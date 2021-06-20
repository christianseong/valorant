var express = require('express');
var router = express.Router();
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
var auth = require('./auth')
var board = require('./board')
var settingboard = require('./settingboard')
var storage = require('./storage')
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//

router.use('/auth',auth);
router.use('/board',board);
router.use('/settingboard',settingboard);
router.use('/storage',storage);

router.all('*', (req,res)=>{
  console.log(req.session);
  res.sendStatus(404);
});

module.exports = router;