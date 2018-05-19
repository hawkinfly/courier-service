const User = require('../models/User')

const signup = async (req, res, next) => {
    const credentials = req.body
    let user
    try {
        user = await User.create(credentials)
    } catch ({ message }) {
        return next({
            status: 400,
            message
        })
    }
    res.json(user)
}
const signin = async (req, res, next) => {
    const { phoneNumber, password } = req.body
    const user = await User.findOne({ phoneNumber })
    if(!user) {
        return next({
            status: 400,
            message: 'User not found'
        })
    }
    try {
        const result = await user.comparePasswords(password)
    } catch (e) {
        return next({
            status: 400,
            message: 'Bad Credentials'
        })
    }

    req.session.userId = user._id
    res.json(user)
}
module.exports.signup = signup
module.exports.signin = signin