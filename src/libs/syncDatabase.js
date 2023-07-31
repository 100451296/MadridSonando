import sequelize from "../db.js";

async function syncDatabase() {
    try {
      await sequelize.sync(); // Sincroniza el modelo Usuario con la base de datos
      console.log('Modelos sincronizados con la base de datos.');
    } catch (error) {
      console.error('Error al sincronizar modelos con la base de datos:', error);
    }
  }

  
export default syncDatabase