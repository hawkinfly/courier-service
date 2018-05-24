const express = require('express')

const BidController = require('../controllers/bid')

const router = express.Router()

router.post('/addbid', BidController.create)

module.exports = router