
// Define our Routes

const route = require('express').Router();

// Routes

route.use('/users', require('./users'));
route.use('/products', require('./products'))


exports = module.exports = {
    route
}