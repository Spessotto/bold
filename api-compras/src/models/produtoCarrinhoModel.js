const Sequelize = require('sequelize')

module.exports = (sequelize) => {

  const model = sequelize.define('produtocarrinho', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      autoIncrement: true
    },
    carrinhoId: {
      type: Sequelize.UUID,
      field: "carrinhoid",
      references: {
        model: 'carrinho',
        key:'id'
      }
    },
    productId: {
      type: Sequelize.STRING(100)
    }
  }, {
    freezeTableName: true,
    tableName: 'produtocarrinho'
  })

  return model;
}
