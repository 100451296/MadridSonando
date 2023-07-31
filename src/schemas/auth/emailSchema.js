import * as expressValidator from "express-validator";

const { checkSchema, notEmpty, isEmail, isLength, normalizeEmail, escape, bail,  } = expressValidator;

export const optionsNormalize = {
  all_lowercase: true,
  gmail_lowercase: true,
  gmail_remove_dots: true,
  gmail_remove_subaddress: true,
  gmail_convert_googlemaildotcom: true,
  outlookdotcom_lowercase: true,
  outlookdotcom_remove_subaddress: true,
  yahoo_lowercase: true,
  yahoo_remove_subaddress: true,
  icloud_lowercase: true,
  icloud_remove_subaddress: true,
};


// Esquema de validación para la función getProfile con sanitización
export const emailSchema = checkSchema({
  email: {
    in: ["body"],
    trim: true, // Quita espacios en blanco laterales
    notEmpty: { bail: true },
    isEmail: { bail: true },
    isLength: {
      options: { max: 70 },
      bail: true,
    },
    normalizeEmail: {
      options: {
        optionsNormalize,
        bail: true,
      },
    },
    escape: {bail: true},

    errorMessage: "Error Email Address",
  },
});
