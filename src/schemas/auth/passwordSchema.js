import * as expressValidator from "express-validator";
import { stringSchema } from "../stringSchema.js";

const { checkSchema, isLength, bail  } = expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const passwordSchema = checkSchema({
  contraseña: {
    ...stringSchema,
    isLength: {
      options: { max: 50, bail: true },
    },
    errorMessage: "Error Password",
  },
});
