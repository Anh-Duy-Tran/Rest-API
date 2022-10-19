const mongoose = require('mongoose')

const friendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('Friend', friendSchema)