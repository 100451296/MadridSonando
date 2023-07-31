import * as expressValidator from "express-validator";
const { checkSchema, isLength } =
  expressValidator;

import { intSchema } from "../intSchema.js";

export const QuantitySchema = checkSchema({
  Quantity: {
    ...intSchema,
    isLength: { options: { max: 7 } },
    errorMessage: "Error Quantity",
  },
});