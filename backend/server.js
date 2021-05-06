// Required Modules

const express = require('express');
const path = require('path');

const app = express();

// Heroku Port or Localhost Port 

const PORT = process.env.PORT || 3000;

// Returns middleware that only parses json and only looks at requests
// where the Content-Type header matches the type option.

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')))

if(process.env.NODE_ENV === 'production')
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "../client/build", "index.html"));
});


// API routes
// These contain our User and Product Schema
// We have have every route export a router to execute this middleware

app.use('/api', require('./route/API').route);

app.listen(PORT, () => {
    console.log(`conecting to ${PORT}`)
})