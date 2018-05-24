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