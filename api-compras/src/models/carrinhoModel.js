const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const produtoCarrinhoModel = require('./produtoCarrinhoModel')(sequelize);

  const model = sequelize.define('carrinho', {
    codigo: {
      type: Sequelize.UUID,
      primaryKey: true,
      autoIncrement: true,
      field: "codigo"
    },
    cod_user: {
      type: Sequelize.UUID,
      allowNull: false,
      field: "cod_user"
    },
    statuscarrinho: {
      type: Sequelize.STRING(20),
      allowNull: false,
      field: "statuscarrinho"
    }
  }, {
    freezeTableName: true,
    tableName: 'carrinho'
  })

  //model.belongsTo(produtCarrinhoModel);
  model.hasMany(produtoCarrinhoModel);

  return model;
}