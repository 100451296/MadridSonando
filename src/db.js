// db.js
import config from './config.js';
import { Sequelize } from 'sequelize';


// SEQUELIZE  POOL
const sequelize = new Sequelize(config.databaseInfo.database, config.databaseInfo.user, config.databaseInfo.password, {
  host: config.databaseInfo.host,
  dialect: 'mysql',
  max: 10,      // Número máximo de conexiones en el pool
    min: 2,       // Número mínimo de conexiones en el pool
    idle: 30000,  // Tiempo en milisegundos que una conexión puede estar inactiva antes de ser cerrada automáticamente
    acquire: 60000, // Tiempo en milisegundos que Sequelize esperará para obtener,
});

export default sequelize;



