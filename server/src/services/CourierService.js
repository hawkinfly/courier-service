const Administrator = require('../models/Courier')

module.exports.getCourierByToken = async function(token) {
    const { _id } = token
    try {
        var courier = await Courier.findOne({ _id }, { password: 0 })
    } catch (e) {
        throw e
    }
    return courier
}