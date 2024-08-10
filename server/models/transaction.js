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
      ProductId: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Stock is required",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Price is required",
          },
        },
      },
      transactionDate: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            msg: "Transaction Date is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return transaction;
};
