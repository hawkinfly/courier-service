const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('../middlewares/bcrypt-promise')

const CourierSchema = new Schema({
    phoneNumber: {type: String, unique: true, index: true},
    password: String,
    firstName: String,
    middleName: String,
    lastName: String,
    passport: {type:String, unique: true},
    address: String,
    car: String,
    numberCar: String,
})

AdministratorSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next()
    }
    const hash = await bcrypt.hash(this.password)
    this.password = hash
    next()
})

module.exports = mongoose.model('Courier', CourierSchema)