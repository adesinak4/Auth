const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    breed: {
        required: true,
        type: String
    },
    owner: {
        required: true,
        type: String
    }
})

// Creating model objects
module.exports = mongoose.model('Data', dataSchema)
