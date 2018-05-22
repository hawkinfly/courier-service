const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('../middlewares/bcrypt-promise')

const CourierSchema = new Schema({
    phoneNumber: {type: Schema.Types.String, unique: true, index: true},
    password: String,
    firstName: String,
    middleName: String,
    lastName: String,
    passport: {type: Schema.Types.String, unique: true},
    address: String,
    car: {type: String, default: 'Автомобиль не указан'},
    numberCar: {type: String, default: 'Автомобильный номер не указан'}
})

CourierSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next()
    }
    const hash = await bcrypt.hash(this.password)
    this.password = hash
    next()
})

module.exports = mongoose.model('Courier', CourierSchema)