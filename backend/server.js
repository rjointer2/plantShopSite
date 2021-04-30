// Required Modules

const express = require('express');
const path = require('path');

const app = express();

// Heroku Port or Localhost Port 

const PORT = process.env.PORT || 2000;

// Returns middleware that only parses json and only looks at requests
// where the Content-Type header matches the type option.

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* 

    WHERE WE WILL SERVE OUR REACT FRONT END BUILD FOLDER 

*/


// API routes
// These contain our User and Product Schema
// We have have every route export a router to execute this middleware

app.use('/api', require('./route/API').route);

/* 

    Right now no get request for the users and products

*/


app.listen(PORT, () => {
    console.log(`conecting to ${PORT}`)
})