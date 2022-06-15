const router = require('express').Router();
let Post = require('../models/post.model');

// Get all posts from DB
router.route('/').get((request, response) => {
    Post.find()
    .then(posts => response.json(posts))
    .catch(err => response.status(400).json('Error: ' + err));
});

// Get post by ID
router.route('/:id').get((request, response) => {
    Post.findById(request.params.id)
    .then(posts => response.json(posts))
    .catch(err => response.status(400).json('Error: ' + err));
});

// Add new post to DB
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

// Delete post by ID
router.route('/:id').delete((request, response) => {
    Post.findByIdAndDelete(request.params.id)
    .then(() => response.json('Post deleted!'))
    .catch(err => response.status(400).json('Error: ' + err));
});

// Update post by ID
router.route('/update/:id').post((request, response) => {
    Post.findById(request.params.id)
    .then(Post => {
        Post.title = request.body.title
        Post.username = request.body.username
        Post.content = request.body.content
        Post.comments = request.body.comments;

        Post.save()
            .then(() => response.json('Post has been updated!'))
            .catch(err => response.status(400).json('Error:' + err));
    })
    .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;