// productModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';
import sequelize from '../db.js'; // Reemplaza con la configuración correcta de Sequelize

// Definir el modelo Producto
const Producto = sequelize.define('Productos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ProductName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Brand: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  DiscountPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  Image_Url: {
    type: DataTypes.STRING(455),
    allowNull: true,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Category: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  SubCategory: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Absolute_Url: {
    type: DataTypes.STRING(455),
    allowNull: true,
  }
}, {
  timestamps: true, // Deshabilitar timestamps (createdAt y updatedAt)
});

// Función para crear un nuevo producto
async function createProduct(product) {
  try {
    // Crear el nuevo producto en la base de datos con validación de Sequelize
    const newProduct = await Producto.create(product);
    return newProduct.id; // Retorna el ID del nuevo producto
  } catch (error) {
    throw new Error('Error al crear el producto');
  }
}

// Función para importar datos desde el archivo JSON y llenar la base de datos
async function importDataFromJSON(data) {
  try {
    // Iterar sobre cada elemento del JSON
    for (const row of data) {
      // Crear un nuevo producto con los datos del JSON
      const productData = {
        ProductName: row.ProductName,
        Brand: row.Brand,
        Price: row.Price,
        DiscountPrice: row.DiscountPrice,
        Image_Url: row.Image_Url,
        Category: row.Category,
        SubCategory: row.SubCategory,
        Absolute_Url: row.Absolute_Url,
      };
      console.log("Producto ->", productData);
      await createProduct(productData);
    }

    console.log('Importación completada.');
  } catch (error) {
    console.error('Error al importar los datos:', error.message);
  }
}

// Función para obtener un producto por su ID
async function getProductById(productId) {
  try {
    const product = await Producto.findByPk(productId);
    return product;
  } catch (error) {
    throw new Error('Error al obtener el producto');
  }
}

// Función para obtener todos los productos
async function getAllProducts() {
  try {
    const products = await Producto.findAll();
    return products;
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
}

// Función para actualizar un producto
async function updateProduct(product) {
  try {
    await Producto.update(product, {
      where: {
        id: product.id,
      },
    });
  } catch (error) {
    throw new Error('Error al actualizar el producto');
  }
}

// Función para eliminar un producto por su ID
async function deleteProduct(productId) {
  try {
    await Producto.destroy({
      where: {
        id: productId,
      },
    });
  } catch (error) {
    throw new Error('Error al eliminar el producto');
  }
}

// Función para obtener los productos de una página específica
async function obtenerProductosPaginados(page) {
  try {
    const offset = (page - 1) * config.pageSize;
    const productos = await Producto.findAll({
      attributes: ["id", 'ProductName', 'Price', "Brand", 'Image_Url', 'DiscountPrice'], // Agregar los campos que deseas seleccionar
      limit: config.pageSize,
      offset: offset,
    });
    return productos;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
}

// Función para verificar si un producto existe por su ID
async function productExistsById(productId) {
  try {
    const product = await Producto.findByPk(productId);
    return !!product; // Devuelve true si el producto existe, o false si no existe
  } catch (error) {
    console.error("Error en " + __dirname + ":\n", error);
    throw new Error('Error al verificar la existencia del producto');
  }
}

export default {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
  importDataFromJSON,
  obtenerProductosPaginados,
  productExistsById
};
