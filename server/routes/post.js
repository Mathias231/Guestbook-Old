const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((request, response) => {
    Post.find()
    .then(posts => response.json(posts))
    .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    const title = request.body.title;
    const username = request.body.username;
    const content = request.body.content;
    const comments = request.body.comments;

    const newPost = new Post({title, username, content, comments});
    
    newPost.save()
    .then(() => response.json('Post added!'))
    .catch(err => response.status(400).json('Erreor: ' + err));
});

module.exports = router;