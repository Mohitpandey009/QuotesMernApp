const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    text:String,
    author:String
})
const collection = new mongoose.model("Qoute",schema);
module.exports = collection;