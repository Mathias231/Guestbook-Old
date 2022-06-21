const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    title: {type: String, required: true},
    username: {type: string, required: true},
    content: {type: String, required: true},
    comments: {type: String, required: true},
}, {
    timestamp: true,
});

const Post = mongoose.model('Post', post)

module.exports = Post;