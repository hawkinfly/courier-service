const Administrator = require('../models/Administrator')

module.exports.getAdministratorByToken = async function(token) {
    const { _id } = token
    try {
        var administrator = await Administrator.findOne({ _id }, { password: 0 })
    } catch (e) {
        throw e
    }
    return administrator
}