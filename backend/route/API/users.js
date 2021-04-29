const User = require('../../db/db').User
const route = require('express').Router();

route.get('/', (req, res) => {
    // Array of all users from DB
    User.findAll().then((users) => {

    }).catch((err) => {
        res.status(500).send({
            error: 'Could not get Users'
        })
    })
    
});

route.post('/', (req, res) => {
    // Creates an object that has the specified prototype or that has null prototype
    // from the schema defined in ./DB/db.js
    User.create({
        // a form must have a name property
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,

    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(500).send({
            error: "Can't post users"
        })
    })
})

exports = module.exports = route