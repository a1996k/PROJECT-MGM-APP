const mongoose = require('mongoose');

const CLientSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type:String,
    },
    phone: {
        type: String,
    },
}); 

module.exports = mongoose.model('Client', CLientSchema);