const express = require('express')

const BidController = require('../controllers/bid')

const router = express.Router()

router.post('/addbid', BidController.create)
router.get('/getbids', BidController.findAllstatus0)
router.post('/deletebid', BidController.delete)

module.exports = router