
require("dotenv").config();

const Sequelize = require('sequelize');

/* 

    CREATE DATABASE shopplantdb;
    create user shopper identified by 'plantpass';
    use shopplantdb;
    grant all priviileges on the shopplantdb. * to shopper;
    grant all privileges on shopplantdb. * to shopper;


*/

const db = new Sequelize(process.env.DB || 'localhost', process.env.UN, process.env.PD, {
    host: process.env.HT,
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
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
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
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


// synchronize a file's in-core state with the underlying storage device
// Sequelize will create this database if doesn't exist already


db.sync().then(() => {
    console.log('Database has been synced')
}).catch((err) => {
    console.log(err)
    console.log("Error creating Database")
    console.log(process.env.UN, ' : ', process.env.PD)
})

/* 
    use shopplantdb;
    show tables;
+-----------------------+
| Tables_in_shopplantdb |
+-----------------------+
| products              |
| users                 |
+-----------------------+

    DESCRIBE user // for field, type, null key, default, and extras

    RIGHT NOW http://localhost:2000/api/users IS AN EMPTY ARRAY WITH NO DEFINE USER
    AND SAME FOR PRODUCTS

*/

exports = module.exports = {
    User, Product
}
