const express = require('express')

const BidController = require('../controllers/bid')

const router = express.Router()

router.post('/addbid', BidController.create)
router.get('/getbids', BidController.findAllstatus0)
router.post('/deletebid', BidController.delete)
router.post('/updatebidstatus', BidController.updateStatus)
router.get('/getreadybids', BidController.findAllstatus123)

module.exports = router