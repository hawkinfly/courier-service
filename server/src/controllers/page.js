const Page = require('../models/page')
const Administrator = require('../models/Administrator')

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

module.exports.getPagesByAdministratorNumber = async function(req, res, next) {
    const { phoneNumber } = req.params
    try {
        var administrator = await Administrator.findOne({ phoneNumber })
    } catch ({ message }) {
        return next({
            status: 500,
            message
        })
    }
    if(!administrator) {
        return next({
            status: 404,
            message: 'Administrator not found'
        })
    }

    try {
        var pages = await Page.find({ administratorId: administrator._id})
    } catch ({ message }) {
        return next({
            status: 500,
            message
        })
    }
    res.json({ pages })
} 

module.exports.deletePage = async function(req, res, next) {
    const _id = req.params.id
    const administratorId = req.administrator._id
    try {
        var page = await Page.findOne({ _id })
    } catch ({ message }) {
        return next({
            status: 500,
            message: "В базе данных нет такой записи"
        })
    }
    if(!page) {
        return next({
            status: 404,
            message: 'Page not found'
        })
    }

    if(administratorId.toString() !== page.administratorId.toString()){
        return next({
            status: 403,
            message: 'Permission denied'
        })
    }

    try {
        page.remove()
    } catch ({ message }) {
        return next({
            status: 500,
            message
        })
    }
    return res.json({message: 'success'})
}