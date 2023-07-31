// planModel.js
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../db.js"; // Replace with your actual Sequelize instance and DB configuration
import Servicio from "./servicioModel.js"

const Plan = sequelize.define(
  "Planes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ServiceID: {
      type: DataTypes.INTEGER, // Añadir el atributo ServiceID
      allowNull: false,
      references: {
        model: Servicio, // Referenciar al modelo Servicio
        key: "id", // Utilizar la clave primaria de Servicio (id) como referencia
      },
    },
  },
  {
    timestamps: true,
  }
); 

// Definir la relación de clave externa
Plan.belongsTo(Servicio.Servicio, { foreignKey: "ServiceID", targetKey: "id" }); // Un plan pertenece a un servicio
Servicio.Servicio.hasMany(Plan, { foreignKey: "ServiceID", sourceKey: "id" }); // Un servicio tiene muchos planes

async function createPlan(price, description, name, serviceId) {
  try {
    const plan = await Plan.create({
      Price: price,
      Description: description,
      Name: name,
      ServiceID: serviceId,
    });
    return plan;
  } catch (error) {
    throw new Error("Error creating plan");
  }
}

async function getPlanById(planId) {
  try {
    const plan = await Plan.findByPk(planId);
    if (!plan) {
      throw new Error("Plan not found");
    }
    return plan;
  } catch (error) {
    throw new Error("Error getting plan");
  }
}

async function getAllPlans() {
  try {
    const plans = await Plan.findAll();
    return plans;
  } catch (error) {
    throw new Error("Error getting plans");
  }
}

async function updatePlan(planId, price, description, name) {
  try {
    const plan = await Plan.findByPk(planId);
    if (!plan) {
      throw new Error("Plan not found");
    }
    plan.Price = price;
    plan.Description = description;
    plan.Name = name;
    await plan.save();
    return plan;
  } catch (error) {
    throw new Error("Error updating plan");
  }
}

async function deletePlan(planId) {
  try {
    const plan = await Plan.findByPk(planId);
    if (!plan) {
      throw new Error("Plan not found");
    }
    await plan.destroy();
    return true;
  } catch (error) {
    throw new Error("Error deleting plan");
  }
}

async function getPlanByService(serviceId) {
  try {
    const plans = await Plan.findAll({
      where: {
        ServiceID: serviceId,
      },
    });
    return plans;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting plans by service");
  }
}

export default { Plan, createPlan, getPlanById, getAllPlans, updatePlan, deletePlan, getPlanByService };
