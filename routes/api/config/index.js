var express = require('express');
var router = express.Router();
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
const controller = require('./controller')
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//

router.post('/write',controller.write)
router.put('/edit',controller.edit)
router.post('/findone',controller.findone)
router.get('/find',controller.find)
module.exports = router;
