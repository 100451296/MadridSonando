import * as expressValidator from "express-validator";
import { numericSchema } from "../numericSchema.js";

const { checkSchema, notEmpty, isNumeric, isLength, escape, bail } =
  expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const DiscountPriceSchema = checkSchema({
  DiscountPrice: {
    ...numericSchema,
    isLength: { options: { max: 50 } },
    errorMessage: "Error DiscountPrice",
  },
});
