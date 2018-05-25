const jwt = require('jsonwebtoken')

const Courier = require('../models/Courier')
const config = require('../config/config')

const signin = async (req, res, next) => {
    const { phoneNumber, password } = req.body
    const courier = await Courier.findOne({ phoneNumber })
    if(!courier) {
        return next({
            status: 400,
            message: 'Курьер не найден'
        })
    }
    try {
        const result = await courier.comparePasswords(password)
    } catch (e) {
        return next({
            status: 400,
            message: 'Неверный пароль'
        })
    }
    const token = jwt.sign({_id: courier._id}, config.secret)
    res.json(token)
}

module.exports.signin = signin