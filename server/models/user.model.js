const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    password: String,
    date: Date.now
})

const User = mongoose.model('User', user)

model.exports = User;