import { validationResult } from "express-validator";

// Middleware para validar los datos de la función getProfile
export const validateData = (req, res, next) => {
  try {
    console.log(req.body)
    // Verificar si hay errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // Si no hay errores de validación, continuar con la ejecución de la función getProfile
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error" });
  }
};
