const express = require('express');
const orderRouter = require('./order.route');

const routes = express.Router();

routes.use('/', orderRouter);

module.exports = routes;