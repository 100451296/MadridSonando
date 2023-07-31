import * as expressValidator from "express-validator";
import { stringSchema } from "../stringSchema.js";

const { checkSchema, notEmpty, isString, isLength, isDate, escape, bail } =
  expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const appointmentDateSchema = checkSchema({
  AppointmentDate: {
    ...stringSchema,
    isLength: { options: { max: 50, bail: true } },
    isDate: {
        options:{
            format: 'YYYY-MM-DD',
            strictMode: false,
            bail: true,
        }
    },
    errorMessage: "Error Date",
  },
});
