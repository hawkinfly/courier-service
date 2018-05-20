const AdministratorService = require('../services/AdministratorService')


module.exports = async function (req, res, next) {
    const { token } = req

    try {
        var administrator = await AdministratorService.getAdministratorByToken(token)
    } catch ({ message }) {
        return next({
            status: 500,
            message
        })
    }
    req.administrator = administrator
    next()
}