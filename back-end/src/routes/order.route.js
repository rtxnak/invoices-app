const express = require('express');
const OrderController = require('../controllers/order.controller');

const orderRouter = express.Router();

orderRouter.get('/', OrderController.getAll);

module.exports = orderRouter;
