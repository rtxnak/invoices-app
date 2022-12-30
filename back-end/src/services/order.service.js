const { Order, Buyer, Provider } = require('../models');
const shownStatus = require('../helper/shownStatus');

const getAll = async () => {
  const ordersInformation = await Order.findAll({
    attributes: ['nNf', 'emissionDate', 'value', 'orderStatusBuyer'],
    include: [
      { model: Buyer, as: 'buyer', attributes: ['name'] },
      { model: Provider, as: 'provider', attributes: ['name'] },
    ],
  });

  ordersInformation.forEach((order) => {
    const orderStatusBuyerParsed = parseInt(order.orderStatusBuyer, 10);
    const orderShownStatusDescription = shownStatus.statusDescription[orderStatusBuyerParsed];
    order.dataValues.orderStatusDescription = orderShownStatusDescription;
  });
  return ordersInformation;
};

module.exports = {
  getAll,
};