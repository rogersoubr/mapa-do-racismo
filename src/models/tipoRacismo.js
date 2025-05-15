import { Model, DataTypes, Sequelize } from 'sequelize';
import config from '../config/config.js';

const sequelize = new Sequelize(config.development);

class TipoRacismo extends Model {}

TipoRacismo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at'
  }
}, {
  sequelize,
  modelName: 'TipoRacismo',
  tableName: 'tipo_racismo',
  timestamps: true,
  underscored: true
});

export default TipoRacismo;
