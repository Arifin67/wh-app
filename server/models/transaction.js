"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.product);
    }
  }
  transaction.init(
    {
      ProductId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return transaction;
};
