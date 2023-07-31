import productModel from "../models/productModel.js";

export const getPage = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);

    console.log(page, req.query.page)
    // Validar página válida (mayor a 0)
    if (page <= 0 || !page) {
      return res.status(400).json({ error: "Página solicitada no válida" });
    }

    const products = await productModel.obtenerProductosPaginados(page);

    // Si no hay productos, se ha llegado al final de las páginas disponibles
    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No hay más productos disponibles" });
    }

    // Enviar una respuesta más descriptiva junto con el código de estado 200
    res.status(200).json({ success: true, products: products });

  } catch (error) {
    console.error("Error al obtener productos:", error);
    // Enviar respuesta de error en caso de excepción
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getProduct = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    if (!id || id < 0) {
      return res.status(400).json({ error: "Página solicitada no válida" }); // Peticion corrupta
    }

    console.log("IDDD", id)
    const product = await productModel.getProductById(id); // Consulta BD

    if (!product) {
      return res.status(404).json({ error: "Pagina no encontrado" }); // Producto no encontrado
    }

    const {ProductId, ProductName, Brand, Price, DiscountPrice, Image_Url, Category} = product;

    const clearProduct = {
      ProductId, 
      ProductName,
      Brand,
      Price,
      DiscountPrice,
      Image_Url,
      Category
    };

    res.status(200).json({ success: true, product: clearProduct }); // Operacion exitosa
  } catch (error) {
    console.error("Error al obtener productos:", error);
    // Enviar respuesta de error en caso de excepción
    res.status(500).json({ error: "Error interno del servidor" }); // Error de ejecuccion
  }
};

export const postProduct = async (req, res) => {
  return res.status(200).json({success: true});
}

/*
export const importData = async (req, res) => {
    try{
        const jsonData = req.body.json;
        console.log('Contenido del archivo JSON:', jsonData);
        await productModel.importDataFromJSON(jsonData);
        res.send(200);

    }
    catch(err){
        console.error(err);
        res.send(500);
    }
};
 */

