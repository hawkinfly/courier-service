const AdministratorService = require('../services/AdministratorService')

module.exports.getCurrentAdministrator = async function(req, res, next) {
    const { token } = req
    try {
        var administrator = await AdministratorService.getAdministratorByToken(token)
    } catch ({ message }) {
        return next ({
            status: 500,
            message
        })
    }
    return res.json(administrator)
    }
module.exports.AdministratorService = AdministratorService