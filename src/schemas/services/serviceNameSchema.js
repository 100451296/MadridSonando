import * as expressValidator from "express-validator";
import { stringSchema } from "../stringSchema.js";
import { serviceExists } from "../../libs/seviceExists.js";

const { checkSchema, notEmpty, isString, isLength, escape, bail } =
  expressValidator;


// Esquema de validación para la función getProfile con sanitización
export const serviceNameSchema = checkSchema({
  ServiceName: {
    ...stringSchema,
    isLength: { options: { max: 50, bail: true } },
    custom: {
        options: async (value) => await serviceExists(value),
    },
    errorMessage: "Error Name",
  },
});
