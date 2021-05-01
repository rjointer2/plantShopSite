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
            error: 'Can not get all users'
        })
    })
})

// delete request

route.delete('/:id', (req, res) => {
    
    User.destroy({ where: { id: req.params.id }});
    res.status(201).send('deleted user')
});

// Update Requests
// This most likely isn't the best way at the moment but this is a smaller application
// so this doesn;t have to be perfect


route.put('/:id/:updateProperty', (req, res) => {

    console.log( req.params.updateProperty )

    
    if( req.params.updateProperty === 'firstName') {
        User.update({ firstName: req.body.firstName }, {where: { id: req.params.id } })
        res.status(201).send('updated firstname');
    }

    if( req.params.updateProperty === 'lastName') {
        User.update({ lastName: req.body.lastName }, {where: { id: req.params.id } })
        res.status(201).send('updated lastname')
    }

    if( req.params.updateProperty === 'username') {
        User.update({ username: req.body.username }, {where: { id: req.params.id } })
        res.status(201).send('updated username')
    }

    if( req.params.updateProperty === 'password') {
        User.update({ password: req.body.password }, {where: { id: req.params.id } })
        res.status(201).send('updated password')
    }



});



/* 

route.put('/:id/firstName', (req, res) => {

    User.update({ firstName: req.body.firstName }, {where: { id: req.params.id } })
    res.status(201).send('updated firstname')
});

route.put('/:id/lastName', (req, res) => {

    User.update({ firstName: req.body.lastName }, {where: { id: req.params.id } })
    res.status(201).send('updated lastname')
});

route.put('/:id/username', (req, res) => {

    User.update({ firstName: req.body.username }, {where: { id: req.params.id } })
    res.status(201).send('updated firstname')
});

route.put('/:id/password', (req, res) => {

    User.update({ firstName: req.body.password }, {where: { id: req.params.id } })
    res.status(201).send('updated firstname')
});
 */


exports = module.exports = route