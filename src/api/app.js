require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');

const app = express();

app.use(bodyParser.json());

app.use('/expense', routes.RouteExpense);

module.exports = app;