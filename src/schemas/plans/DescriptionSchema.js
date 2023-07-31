import * as expressValidator from "express-validator";
import { stringSchema } from "../stringSchema.js";

const { checkSchema, isLength } =
  expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const DescriptionSchema = checkSchema({
  Description: {
    ...stringSchema,
    isLength: { options: { max: 100 } },
    errorMessage: "Error Description",
  },
});
