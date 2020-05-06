/*
    Corey Cheatham
    COMP 2150
    Programming Assignment 3
*/

let express = require('express');
let app = express();
let routes = require('./asgn-router');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost/asgn-api', {
    useNewUrlParser: true
});
var db = mongoose.connection;

if (!db) {
    console.log("Error connecting to the database");
} else {
    console.log("Database connected successfully.");
}


app.use('/asgn-api', routes);

app.listen(port, function () {
    console.log("Running asgn-api on port " + port);
});