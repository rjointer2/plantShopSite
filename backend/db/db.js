
const Sequelize = require('sequelize');

const db = new Sequelize('shopplantdb', 'shopper', 'plantpass', {
    host: 'localhost',
    dialect: 'mysql', 
    pool: {
        min: 0,
        max: 10,
    }
});

//  This is for our Users

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,

    }
});

// This is for our products

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
});


// synchronize a file's in-core state with the underlying storage device
db.sync().then(() => {
    console.log('Database has been synced')
}).catch((err) => {
    console.log(err)
    console.log("Error creating Database")
})

exports = module.exports = {
    User, Product
}