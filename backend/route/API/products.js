
const Product = require('../../db/db').Product;
const route = require('express').Router();

route.get('/', (req, res) => {
    // get all products
    Product.findAll().then((products) => {
        res.status(201).send(products)
    }).catch((err) => {
        res.status(500).send({
            error: 'Can not get products'
        })
    })

})

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
    }).then((product) => {
        res.status(201).send(product)
    }).catch((err) => {
        res.send(500).send({
            error: 'Can not post new product'
        })
    })
    
})

exports = module.exports = route