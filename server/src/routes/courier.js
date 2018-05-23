const express = require('express')

const CourierController = require('../controllers/courier')

const router = express.Router()

router.post('/addcourier', CourierController.create)
router.get('/editcourier', CourierController.findAll)

module.exports = router