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

const adminSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: Number
    }
})

// Creating model objects
module.exports = mongoose.model('Data', dataSchema);
//const Admin = mongoose.model('Admin', adminSchema);

//module.exports = {Data, Admin}
