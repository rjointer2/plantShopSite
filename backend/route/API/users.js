const User = require('../../db/db').User
const route = require('express').Router();

route.get('/', (req, res) => {
    // Array of all users from DB
    User.findAll().then((users) => {
        res.status(200).send(users)
    }).catch((err) => {
        res.status(500).send({
            error: 'Could not get Users'
        })
    })
    
});

// Expecting these proprties in our post request to create a user

route.post('/', (req, res) => {
    // http://localhost:2000/api/users/post
    // Creates an object that has the specified prototype or that has null prototype
    // from the schema defined in ./DB/db.js
    User.create({
        // a form must have these properties
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        res.status(201).send(user)
        console.log(user)
    }).catch((err) => {
        res.status(500).send({
            error: 'Can get all users'
        })
    })
})

// delete request

route.delete('/:id', (req, res) => {
    
    User.destroy({ where: { id: req.params.id }});
    res.status(201).send('deleted user')
});

// Update Request

// FIX THIS UPDATE REQUEST, NOT UPDATING

route.put('/:id/firstName', (req, res) => {
    User.update({ firstName: req.params.firstName }, {
        where: req.params.id
    })
    res.status(201).send('updated firstname')
})

route.put('/:id/lastName', (req, res) => {
    User.update({ firstName: req.params.lastName, where: req.params.id })
    res.status(201).send('updated lastName')
})

route.put('/:id/password', (req, res) => {
    User.update({ firstName: req.params.password, where: req.params.id })
    res.status(201).send('updated password')
})

route.put('/:id/username', (req, res) => {
    User.update({ firstName: req.params.username, where: req.params.id })
    res.status(201).send('updated username')
})


exports = module.exports = route