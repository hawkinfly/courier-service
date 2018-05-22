const Courier = require('../models/Courier')

module.exports.create = async function (req, res, next) {
    const pageData = req.body
    try {
        var courier = await Courier.create(pageData)
    } catch ({ message }) {
        return next({
            status: 400,
            message
        })
    }
    res.json(courier)
} 