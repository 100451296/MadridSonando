import userModel from "../models/userModel.js";

export const userNotExists = async (value) => {
    const existingUser = await userModel.exists(value);
    if (existingUser) throw new Error('E-mail already in use'); // Devuelve true si existe el usuario, de lo contrario, devuelve false
};