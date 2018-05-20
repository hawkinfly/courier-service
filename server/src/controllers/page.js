const Page = require('../models/page')

module.exports.create = async function(req, res, next) {
    const pageData = req.body
    const administratorId = req.administrator._id
    pageData.administratorId = administratorId
    try {
        var page = await Page.create(pageData)
    } catch ({ message }) {
        return next({
            status: 400,
            message
        })
    }
    res.json(page)
}

module.exports.getAll = async function(req, res, next) {
    try {
        var pages = await Page.find({}) 
    } catch ({ message }){
        return next({
            status: 500,
            message
        })
    }
    res.json({pages})
}