const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BidSchema = new Schema({
    product: String,
    address: String,
    cost: String,
    phoneNumber: String,
    datetime: String,
    id_courier: String,
    note: String,
    status: {type: Number, min: 0, max: 3, default: 0}
})

module.exports = mongoose.model('Bid', BidSchema)