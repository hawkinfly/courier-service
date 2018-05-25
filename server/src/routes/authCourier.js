const express = require('express')
const AuthCourierController = require('../controllers/authCourier')

const router = express.Router()

router.post('/signincourier', AuthCourierController.signin)

module.exports = router