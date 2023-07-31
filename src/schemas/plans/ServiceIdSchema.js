import * as expressValidator from "express-validator";
import { intSchema } from "../intSchema.js";

const { checkSchema, isLength } = expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const ServiceIDSchema = checkSchema({
  ServiceID: {
    ...intSchema,
    isLength: { options: { max: 30 } },
    errorMessage: "Error ServideId",
  },
});
