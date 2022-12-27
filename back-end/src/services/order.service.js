const { Order, Buyer, Provider } = require('../models');
const shownStatus = require('../helper/shownStatus');

const getAll = async () => {
  const ordersInformation = await Order.findAll({
    attributes: ['nNf', 'emissionDate', 'value', 'orderStatusBuyer',],
    include: [
      { model: Buyer, as: 'buyer', attributes: ['name'], },
      { model: Provider, as: 'provider', attributes: ['name'], },
    ],
  });

  ordersInformation.map((order) => {
    const orderShownStatusstatusDescription = shownStatus.statusDescription[parseInt(order.orderStatusBuyer)];
    order.orderStatusBuyer = orderShownStatusstatusDescription;
  });

  return ordersInformation;
};

module.exports = {
  getAll,
};