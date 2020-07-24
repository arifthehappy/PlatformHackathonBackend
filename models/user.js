const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    index: {
        type: Number,
        default: 0,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
        // minlength: 10,
        //maxlength: 10
    },
    listOfProducts: {
        type: Array,
        default: []
    },
    budget: {
        type: Number,
        //required: true,
        // default: 0,
        //minimum: 0
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;