import * as expressValidator from "express-validator";
import { stringSchema } from "../stringSchema.js";

const { checkSchema, isLength } =
  expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const NameSchema = checkSchema({
  Name: {
    ...stringSchema,
    isLength: { options: { max: 50 } },
    errorMessage: "Error Name",
  },
});
