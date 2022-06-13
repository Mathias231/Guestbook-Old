const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    title: String, 
    username: String, 
    conentet: String,
    comments: [{ username: String, content: String, date: Date }],
    date: {type: Date, default: Date.now}
})

const Post = mongoose.model('Post', post)

model.exports = Post;