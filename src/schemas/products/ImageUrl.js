import * as expressValidator from "express-validator";
import { urlSchema } from "../urlSchema.js";

const { checkSchema, isLength  } = expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const ImageUrlSchema = checkSchema({
  Image_Url: urlSchema
});
