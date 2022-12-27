const OrderService = require('../services/order.service');

const getAll = async (_req, res) => {
  const ordersInformation = await OrderService.getAll();

  res.status(200).json(ordersInformation);
};

module.exports = {
  getAll,
};
