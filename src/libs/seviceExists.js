import servicioModel from "../models/servicioModel.js";

export const serviceExists = async (value) => {
    const existingService = await servicioModel.exists(value);
    if (!existingService) throw new Error('Service Does Not Exists'); // Devuelve true si existe el usuario, de lo contrario, devuelve false
};