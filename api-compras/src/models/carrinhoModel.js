const Sequelize = require('sequelize')

module.exports = (sequelize) => {

  const model = sequelize.define('carrinho', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: Sequelize.UUID,
      allowNull: false,
      field: "userId"
    },
    statuscarrinho: {
      type: Sequelize.STRING(20),
      allowNull: false,
      field: "statusCarrinho"
    }
  }, {
    freezeTableName: true,
    tableName: 'carrinho'
  })

  return model;
}