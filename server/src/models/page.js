const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PageSchema = new Schema({
    title: { type: String, require: true},
    body: { type: String, require: true},
    url: {type: String, require: true, unique: true},
    createdAt: {type: Date, require: true, default: Date.now},
    administratorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Administrator'}
})

module.exports = mongoose.model('Page', PageSchema)