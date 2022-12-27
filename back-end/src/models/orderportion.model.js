module.exports = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define('Orderportion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.BOOLEAN,
    orderId:  { type: DataTypes.INTEGER, foreignKey: true },
  });

  return Orderportion;
};
