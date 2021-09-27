const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID, //id especifico con letras y numeros
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span:{
      type: DataTypes.STRING,
      allowNull: true
    },
    createdInDb: { // para distinguir entre dogs de la api y los creados en la db
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }

  });
};
