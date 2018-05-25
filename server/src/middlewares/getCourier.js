const CourierService = require('../services/CourierService')


module.exports = async function (req, res, next) {
    const { token } = req

    try {
        var courier = await CouirierService.getCourierByToken(token)
    } catch ({ message }) {
        return next({
            status: 500,
            message
        })
    }
    req.courier = courier
    next()
}