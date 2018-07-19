const jwt = require('jsonwebtoken')

const Administrator = require('../models/Administrator')
const config = require('../config/config')

const signup = async (req, res, next) => {
    const credentials = req.body
    let administrator
    try {
        administrator = await Administrator.create(credentials)
    } catch ({ message }) {
        return next({
            status: 400,
            message
        })
    }
    res.json(administrator)
}
const signin = async (req, res, next) => {
    const { phoneNumber, password } = req.body
    const administrator = await Administrator.findOne({ phoneNumber })
    if(!administrator) {
        return next({
            status: 400,
            message: 'Administrator not found'
        })
    }
    try {
        const result = await administrator.comparePasswords(password)
    } catch (e) {
        return next({
            status: 400,
            message: 'Ошибка авторизации'
        })
    }

    const token = jwt.sign({_id: administrator._id}, config.secret)
    res.json(token)
}
module.exports.signup = signup
module.exports.signin = signin