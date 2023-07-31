import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Usuario = sequelize.define(
  "Usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true, // Hace que el campo sea único en la tabla
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contraseña: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    timestamps: true, // Habilita las columnas createdAt y updatedAt
  }
);

async function getUserByEmail(email) {
  try {
    const user = await Usuario.findOne({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error al obtener el usuario por email");
  }
}

async function getUserById(id) {
  try {
    const user = await Usuario.findOne({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error al obtener el usuario por id");
  }
}

async function createUser(user) {
  try {
    // Crear el nuevo usuario en la base de datos con validación de Sequelize
    const newUser = await Usuario.create(user);
    return newUser.id; // Retorna el ID del nuevo usuario
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      // Manejar los errores de validación de Sequelize
      const errorMessages = error.errors.map((err) => err.message);
      throw new Error("Error al crear el usuario: " + errorMessages.join(", "));
    }
    throw new Error("Error al crear el usuario: " + error.message);
  }
}

async function updateUser(user) {
  try {
    // Actualizar el usuario en la base de datos con validación de Sequelize
    await Usuario.update(
      {
        nombre: user.nombre,
        email: user.email,
        direccion: user.direccion,
        contraseña: user.contraseña,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      // Manejar los errores de validación de Sequelize
      const errorMessages = error.errors.map((err) => err.message);
      throw new Error(
        "Error al actualizar el usuario: " + errorMessages.join(", ")
      );
    }
    throw new Error("Error al actualizar el usuario");
  }
}

async function deleteUser(userId) {
  try {
    await Usuario.destroy({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    throw new Error("Error al eliminar el usuario");
  }
}

async function exists(email) {
  const user = await getUserByEmail(email);
  return user ? true : false;
}

export default {
  Usuario,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  exists
};
