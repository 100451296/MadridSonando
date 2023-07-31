// servicioModel.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js"; 

const Servicio = sequelize.define(
  "Servicio",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ServiceName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Timestamp de creación con valor actual
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Timestamp de actualización con valor actual
    },
  },
  {
    tableName: 'Servicios', // Nombre de la tabla en la base de datos
    timestamps: false, // Habilita las columnas createdAt y updatedAt
  }
);



async function createServicio(serviceName) {
  try {
    const servicio = await Servicio.create({
      ServiceName: serviceName,
    });
    return servicio;
  } catch (error) {
    console.error("Error creating servicio:", error);
    throw new Error("Error creating servicio");
  }
}

async function getServicioById(servicioId) {
  try {
    const servicio = await Servicio.findByPk(servicioId);
    if (!servicio) {
      throw new Error("Servicio not found");
    }
    return servicio;
  } catch (error) {
    throw new Error("Error getting servicio");
  }
}

async function getAllServicios() {
  try {
    const servicios = await Servicio.findAll();
    return servicios;
  } catch (error) {
    throw new Error("Error getting servicios");
  }
}

async function updateServicio(servicioId, serviceName) {
  try {
    const servicio = await Servicio.findByPk(servicioId);
    if (!servicio) {
      throw new Error("Servicio not found");
    }
    servicio.ServiceName = serviceName;
    await servicio.save();
    return servicio;
  } catch (error) {
    throw new Error("Error updating servicio");
  }
}

async function deleteServicio(servicioId) {
  try {
    const servicio = await Servicio.findByPk(servicioId);
    if (!servicio) {
      throw new Error("Servicio not found");
    }
    await servicio.destroy();
    return true;
  } catch (error) {
    throw new Error("Error deleting servicio");
  }
}

async function getServicioIdByName(serviceName) {
  try {
    const servicio = await Servicio.findOne({
      where: {
        ServiceName: serviceName,
      },
    });

    if (!servicio) {
      throw new Error("Servicio not found");
    }

    return servicio.id;
  } catch (error) {
    throw new Error("Error getting servicio ID by name");
  }
}

async function exists(name) {
  return await getServicioIdByName(name) ? true : false;
}

export default {
  Servicio,
  createServicio,
  getServicioById,
  getAllServicios,
  updateServicio,
  deleteServicio,
  getServicioIdByName,
  exists,
};
