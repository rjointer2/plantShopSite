
// Required Modules

const express = require('express');
const mysql = require('mysql2');
const path = require('path');

// PORT

const port = process.env.PORT || 2000

// Returns middleware that only parses json and only looks at requests
// where the Content-Type header matches the type option.

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Serving Static File from our future front end ( React )
app.use('/', express.static(path.join(__dirname, '../client/build')));

// When using Heroku we must serve on production

if(process.env.NODE_ENV === 'production')
app.use(express.static(path.join(__dirname, "../client/build")));

const app = express();


// App Listening for Heroku Port or Local Host Port

app.listen(port, () => {
    console.log(`Connected to PORT ${port}`)
})