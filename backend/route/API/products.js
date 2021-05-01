
const Product = require('../../db/db').Product;
const route = require('express').Router();

// /api/products

route.get('/', (req, res) => {
    // get all products
    Product.findAll().then((products) => {
        res.status(201).send(products)
    }).catch((err) => {
        res.status(500).send({
            error: 'Can not get products'
        })
    })
});

// Create new product

route.post('/', (req, res) => {
    // post a new products

    // The price must be a integer before convert as a floating point
    if(req.body.price === NaN) res.send(500).status({
        error: `${req.body.price} is not a integer`
    })

    Product.create({
        name: req.body.name,
        // We have to parse float the input or it will send a request as a string
        // for ours we have float in our db's schema
        price: parseFloat(req.body.price),
        summary: req.body.summary,
        picture: req.body.picture
    }).then((product) => {
        res.status(201).send(product)
    }).catch((err) => {
        res.send(500).send({
            error: 'Can not post new product'
        })
    })
});

// delete request

route.delete('/:id', (req, res) => {
    
    User.destroy({ where: { id: req.params.id }});
    res.status(201).send('deleted product')
});

// Update Requests
// This most likely isn't the best way at the moment but this is a smaller application
// so this doesn;t have to be perfect

route.put('/:id/name', (req, res) => {

    User.update({ name: req.body.name }, {where: { id: req.params.id } })
    res.status(201).send('updated name')
});

route.put('/:id/price', (req, res) => {

    User.update({ firstName: req.body.price }, {where: { id: req.params.id } })
    res.status(201).send('updated price')
});

route.put('/:id/summary', (req, res) => {

    User.update({ firstName: req.body.summary }, {where: { id: req.params.id } })
    res.status(201).send('updated summary')
});

route.put('/:id/picture', (req, res) => {

    User.update({ firstName: req.body.picture }, {where: { id: req.params.id } })
    res.status(201).send('updated picture')
});


exports = module.exports = route