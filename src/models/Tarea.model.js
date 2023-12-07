const sequelize = require('../database');
const {DataTypes} = require('sequelize');

const Tarea= sequelize.define('Tarea', {
  tarea_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  }
});

module.exports = Tarea;