var express = require('express');
var router = express.Router();
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
const controller = require('./controller')
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//

router.post('/write',controller.write)
router.post('/delete',controller.delete)
router.post('/takeboard',controller.takeboard)
router.post('/takeboardsort',controller.takeboardsort)
router.post('/takeboardviews',controller.takeboardviews)
router.post('/search',controller.search)
router.post('/count',controller.count)
router.post('/findcate',controller.findcate)
router.post('/findone',controller.findone)
router.post('/findpage',controller.findpage)
router.put('/edit',controller.edit)
router.put('/addviews',controller.addviews)
router.get('/find',controller.find)
router.post('/findmain',controller.findmain)

router.post('/cmtwrite',controller.cmtwrite)
router.post('/cmtfind',controller.cmtfind)
router.post('/cmtdelete',controller.cmtdelete)
module.exports = router;
