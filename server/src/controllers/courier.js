const Courier = require('../models/Courier')
const bcrypt = require('../middlewares/bcrypt-promise')

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

module.exports.delete = async function (req, res, next) {
    const id = req.body._id
    try {
        var result = await Courier.findByIdAndRemove(id)
    } catch ({ message }) {
        throw next({
            status: 400,
            message
        })
    }
    res.json(result)
}

module.exports.update = async function (req, res, next) {
    const id = req.body._id
    if (req.body.password !== ''){
        const hash = await bcrypt.hash(req.body.password)
        req.body.password = hash

    } else {
        delete req.body.password
    }
    try {
        var result = await Courier.findByIdAndUpdate(id, req.body, {new: true} )
    } catch ({ message }) {
        throw next({
            status: 400,
            message
        })
    }
    res.json(result)
}

module.exports.findOne = async function (req, res, next) {
    const id_courier = req.body.id_courier
    try {
        var courier = await Courier.findById(id_courier)

    } catch ({ message }) {
        throw next({
            status: 400,
            message
        })
    }
    courier.password = ''
    res.json(courier)
}