const mongoose = require('mongoose');

const User = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true
    },
    password: String
});

module.exports = mongoose.model('Users', User);