const express = require('express')

const CourierController = require('../controllers/courier')

const router = express.Router()

router.post('/addcourier', CourierController.create)

module.exports = router