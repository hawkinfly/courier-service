const express = require('express')
const AdministratorController = require('../controllers/administrator')

const router = express.Router()

router.get('/current-administrator', AdministratorController.getCurrentAdministrator)

module.exports = router