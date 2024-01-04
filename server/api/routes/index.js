const express = require("express");
const app = express();

const data = require('./data/dataVisualise.js');

app.use('/data', data);


module.exports = app;
