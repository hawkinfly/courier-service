const express = require('express')

const CourierController = require('../controllers/courier')

const router = express.Router()

router.post('/addcourier', CourierController.create)
router.get('/editcourier', CourierController.findAll)
router.post('/deletecourier', CourierController.delete)
router.post('/updatecourier', CourierController.update)

module.exports = router