import planModel from "../models/planModel.js";
import servicioModel from "../models/servicioModel.js";

export const servicePlans = async (req, res) => {
  const { servicio } = req.params;

  // Obtiene planes
  const serviceId = await servicioModel.getServicioIdByName(servicio);
  const plans = await planModel.getPlanByService(serviceId); // Seccion critica de seguridad entrada url

  // Crear un nuevo array con solo los campos requeridos
  const simplifiedPlans = plans.map((product) => {
    const { Price, Description, Name } = product;
    return { Price, Description, Name };
  });

  res.send(simplifiedPlans);
};

export const postProducts = async (req, res) => {
  return res.status(200).json({ success: true });
};
