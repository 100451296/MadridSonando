import * as expressValidator from "express-validator";
import { stringSchema } from "../stringSchema.js";

const { checkSchema, notEmpty, isString, isLength, escape, bail  } = expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const BrandSchema = checkSchema({
  Brand: {
    ...stringSchema,
    isLength: { options: { max: 50 } },
    errorMessage: "Error Name",
  },
});
