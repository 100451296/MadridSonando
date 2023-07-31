// citaModel.js
import { DataTypes, Op } from "sequelize";
import sequelize from "../db.js"; // Reemplaza con la configuración correcta de Sequelize
import servicioModel from "./servicioModel.js";
import userModel from "./userModel.js";
import moment from "moment";

// Definir el modelo Cita
const Cita = sequelize.define(
  "Cita",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ServiceName: { // Usamos ServiceName en lugar de ServiceID para el nombre del servicio
      type: DataTypes.STRING,
      allowNull: false,
    },
    AppointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Deshabilitar timestamps (createdAt y updatedAt)
  }
);

// Establecer relaciones con los modelos Servicio y Usuario
Cita.belongsTo(servicioModel.Servicio, {
  foreignKey: "ServiceName", // Nombre de la clave foránea en el modelo Cita
  targetKey: "ServiceName", // Nombre del campo único en el modelo Servicio
});
servicioModel.Servicio.hasMany(Cita, {
  foreignKey: "ServiceName", // Nombre de la clave foránea en el modelo Cita
  sourceKey: "ServiceName", // Nombre del campo único en el modelo Servicio
});


// UserModel Foreign Key
Cita.belongsTo(userModel.Usuario, {
  foreignKey: "UserId", // Nombre de la clave foránea en el modelo Cita
  targetKey: "id", // Nombre de la clave primaria en el modelo Usuario
});
userModel.Usuario.hasMany(Cita, {
  foreignKey: "UserId",
  sourceKey: "id",
});

// Función para crear una nueva cita con el UserId, ServiceID y la fecha actual
async function createCita(UserId, ServiceName, Date) {
  try {
    // Get the current date and time
    const userId = parseInt(UserId, 10);

    // Crear la nueva cita en la base de datos con validación de Sequelize
    const newCita = await Cita.create({
      UserId: userId,
      ServiceName: ServiceName,
      AppointmentDate: Date,
    });

    return newCita.id; // Retorna el ID de la nueva cita
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear la cita");
  }
};

// Función para buscar una cita por nombre de servicio y fecha
async function findAppoinment(serviceName, date) {
  try {
    // Convertir el parámetro date a una instancia de Date
    const appointmentDate = new Date(date);

    // Buscar la cita utilizando el nombre del servicio y la fecha
    const cita = await Cita.findOne({
      where: {
        ServiceName: serviceName,
        AppointmentDate: appointmentDate,
      },
    });

    return cita; // Retorna la cita encontrada o null si no se encontró
  } catch (error) {
    console.log(error);
    throw new Error("Error al buscar la cita por nombre de servicio y fecha");
  }
}

async function exists(serviceName, date) {
  try {
    return await findAppoinment(serviceName, date) ? true : false;
  } catch (error) {
    console.log(error);
    throw new Error("Error al buscar la cita por nombre de servicio y fecha");
  }
}

async function getMonth(serviceName, year, month) {
  try {
    // Obtener la fecha inicial y final del mes
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

    // Realizar la consulta a la base de datos
    const citas = await Cita.findAll({
      where: {
        ServiceName: serviceName,
        AppointmentDate: {
          [Op.between]: [startOfMonth, endOfMonth],
        },
      },
    });

    return citas;
  } catch (error) {
    // Manejo de errores si la consulta falla
    console.error("Error al obtener las citas:", error);
    throw error;
  }
}

export default {
  createCita,
  findAppoinment,
  exists,
  getMonth,
};
