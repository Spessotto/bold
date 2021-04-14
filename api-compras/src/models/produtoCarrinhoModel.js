const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  //const carrinhoModel = require('./carrinhoModel')(sequelize);

  const model = sequelize.define('produtocarrinho', {
    codigo: {
      type: Sequelize.UUID,
      primaryKey: true,
      autoIncrement: true
    },
    carrinhoCodigo: {
      type: Sequelize.UUID,
      field: "cod_carrinho",
      references: {
        model: 'carrinho',
        key:'codigo'
      }
    },
    cod_product: {
      type: Sequelize.STRING(100),
      field: "cod_product",
    },
    price: {
      type: Sequelize.INTEGER,
      field: "price",
    }
  }, {
    freezeTableName: true,
    tableName: 'produtocarrinho'
  });

  //model.belongsTo(carrinhoModel);
  //carrinhoModel.hasMany(model);

  return model;
}

