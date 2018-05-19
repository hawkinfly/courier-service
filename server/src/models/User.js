const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('../middlewares/bcrypt-promise')

const UserSchema = new Schema({
    phoneNumber: {type: String, unique: true, index: true},
    password: String
})

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next()
    }
    const hash = await bcrypt.hash(this.password)
    this.password = hash
    next()
})

UserSchema.methods.comparePasswords = function (password) {
    return bcrypt.compare(password, this.password)     
}

module.exports = mongoose.model('User', UserSchema)