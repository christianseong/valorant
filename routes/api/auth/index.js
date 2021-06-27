var express = require('express');
var router = express.Router();
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
const controller = require('./controller')
const authMiddleware = require('../../../middlewares/auth')
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//

router.post('/register',controller.register)
router.post('/login',controller.login)
router.post('/delete',controller.delete)
router.put('/edit',controller.edit)
router.get('/logout',controller.logout)
router.get('/find',controller.find)
router.post('/findone',controller.findone)

router.use('/check', authMiddleware)
router.get('/check', controller.check)

module.exports = router;
