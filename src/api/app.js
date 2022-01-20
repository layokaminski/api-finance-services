require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const Middlewares = require('../middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/expense', routes.RouteExpense);

app.use(Middlewares.errorMiddlewares);

module.exports = app;