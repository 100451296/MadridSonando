import * as expressValidator from "express-validator";
import { stringSchema } from "../stringSchema.js";

const { checkSchema, notEmpty, isString, isLength, escape, bail  } = expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const nameSchema = checkSchema({
  nombre: {
    ...stringSchema,
    isLength: { options: { max: 20 } },
    errorMessage: "Error Name",
  },
});
