const mongoose = require('mongoose')

const Mobileschema = new mongoose.Schema({
    mobilename : String,
    specs : String,
    description : String,
    price : Number,
    rating : Number
})

const Mobilemodel = mongoose.model('Mobile', Mobileschema)
module.exports = Mobilemodel