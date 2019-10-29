const mongoose = require('mongoose');
const product = require('./product');

const User = mongoose.Schema({
    userName:{
        type : String,
        required: [true,"please enter email address"]

    },
    password:String,
    products :[product.Product]
    
});

module.exports = mongoose.model('User',User);