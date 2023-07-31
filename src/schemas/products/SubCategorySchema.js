import * as expressValidator from "express-validator";
import { stringSchema } from "../stringSchema.js";

const { checkSchema, isLength, errorMessage } =
  expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const SubCategorySchema = checkSchema({
  SubCategory: {
    ...stringSchema,
    isLength: { options: { max: 50 } },
    errorMessage: "Error SubCategory",
  },
});
