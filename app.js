/*
    Corey Cheatham
    COMP 2150
    Programming Assignment 3
*/

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = 8080;


app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running asgn-api on port " + port);
});