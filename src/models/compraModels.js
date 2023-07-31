// compraModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; // Reemplaza con la configuración correcta de Sequelize

// Definir el modelo Compra
const Compra = sequelize.define('Compra', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_compra: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: false, // Deshabilitar timestamps (createdAt y updatedAt)
});

// Definir el modelo CompraPlan
const CompraPlan = sequelize.define('CompraPlan', {
  compra_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plan_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false, // Deshabilitar timestamps (createdAt y updatedAt)
});

// Definir el modelo CompraProducto
const CompraProducto = sequelize.define('CompraProducto', {
  compra_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false, // Deshabilitar timestamps (createdAt y updatedAt)
});

// Función para crear una nueva compra
async function createCompra(compra) {
  try {
    // Crear la nueva compra en la base de datos con validación de Sequelize
    const newCompra = await Compra.create(compra);
    return newCompra.id; // Retorna el ID de la nueva compra
  } catch (error) {
    throw new Error('Error al crear la compra');
  }
}

// Función para crear la relación compra-planes
async function createCompraPlan(compraPlan) {
  try {
    // Crear la relación compra-planes en la base de datos con validación de Sequelize
    await CompraPlan.create(compraPlan);
  } catch (error) {
    throw new Error('Error al crear la relación compra-planes');
  }
}

// Función para crear la relación compra-productos
async function createCompraProducto(compraProducto) {
  try {
    // Crear la relación compra-productos en la base de datos con validación de Sequelize
    await CompraProducto.create(compraProducto);
  } catch (error) {
    throw new Error('Error al crear la relación compra-productos');
  }
}

export default {
  createCompra,
  createCompraPlan,
  createCompraProducto,
};
