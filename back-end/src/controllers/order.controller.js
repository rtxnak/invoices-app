const OrderService = require('../services/order.service');

const getAll = async (_req, res) => {
  try {
    const ordersInformation = await OrderService.getAll();

    res.status(200).json(ordersInformation);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAll,
};
