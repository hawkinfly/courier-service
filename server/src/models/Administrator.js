const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('../middlewares/bcrypt-promise')

const AdministratorSchema = new Schema({
    phoneNumber: {type: String, unique: true, index: true},
    password: String
})

AdministratorSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next()
    }
    const hash = await bcrypt.hash(this.password)
    this.password = hash
    next()
})

AdministratorSchema.methods.comparePasswords = function (password) {
    return bcrypt.compare(password, this.password)     
}

module.exports = mongoose.model('Administrator', AdministratorSchema)