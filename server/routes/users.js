const router = require('express').Router();
let User = require('../models/user.model');


router.route('/').get((request, response) => {
    User.find()
    .then(users => response.json(users))
    .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/add').post((request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    const date = request.body.date;

    const newUser = new User({username, password, date});
    
    newUser.save()
    .then(() => response.json('User added!'))
    .catch(err => response.status(400).json('Erreor: ' + err));
});

module.exports = router;