import userModel from "../models/userModel.js";
import citaModels from "../models/citaModels.js";

export const getProfile = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.user.id);

    const { nombre, direccion, email } = user;
    const cleanUser = {
      nombre,
      direccion,
      email,
    };

    return res.status(200).json({ success: true, user: cleanUser }); // Operacion exitosa
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const patchProfle = async (req, res) => {
    try {
        // VALIDACION
        console.log(req.body);
        return res.status(200).json({ succes: true })
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
