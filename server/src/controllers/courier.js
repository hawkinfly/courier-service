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

module.exports.findAll = async function (req, res, next) {
    try {
        var list_couriers = await Courier.find({}).sort('lastName')

    } catch ({ message }) {
        throw next({
            status: 400,
            message
        })
    }
     for (i in list_couriers) {
         list_couriers[i].password = ''
     }
    res.json(list_couriers)
}
