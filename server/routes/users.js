const router = require('express').Router();
let User = require('../models/user.model');

// Get all users from DB
router.route('/').get((request, response) => {
    User.find()
    .then(users => response.json(users))
    .catch(err => response.status(400).json('Error: ' + err));
});

// Get user by ID
router.route('/:id').get((request, response) => {
    User.findById(request.params.id)
    .then(users => response.json(users))
    .catch(err => response.status(400).json('Error: ' + err));
});

// Add new user to DB
router.route('/add').post((request, response) => {
    const username = request.body.username;
    const password = request.body.password;

    const newUser = new User({username, password});
    
    newUser.save()
    .then(() => response.json('User added!'))
    .catch(err => response.status(400).json('Erreor: ' + err));
});

// Delete user by ID
router.route('/:id').delete((request, response) => {
    User.findIdAndDelete(request.params.id)
    .then(() => response.json('User deleted!'))
    .catch(err => response.status(400).json('Error: ' + err));
});

module.exports = router;