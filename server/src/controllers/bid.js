const Bid = require('../models/Bid')

module.exports.create = async function (req, res, next) {
    const pageData = req.body
    try {
        var bid = await Bid.create(pageData)
    } catch ({ message }) {
        return next({
            status: 400,
            message
        })
    }
    res.json(bid)
}

module.exports.findAllstatus0 = async function (req, res, next) {
    try {
        var list_bids = await Bid.find({}).where('status').equals(0).sort('datetime')

    } catch ({ message }) {
        throw next({
            status: 400,
            message
        })
    }
    res.json(list_bids)
}

module.exports.delete = async function (req, res, next) {
    const id = req.body._id
    try {
        var result = await Bid.findByIdAndRemove(id)
    } catch ({ message }) {
        throw next({
            status: 400,
            message
        })
    }
    res.json(result)
}