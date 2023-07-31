import * as expressValidator from "express-validator";

const { checkSchema, notEmpty, isStrongPassword, isLength, escape, bail  } = expressValidator;

// Esquema de validación para la función getProfile con sanitización
export const passwordSchemaPost = checkSchema({
  contraseña: {
    in: ["body"],
    notEmpty: true,
    trim: true, // Desinfectante
    isStrongPassword: true,
    isLength: {
      options: { max: 20, bail: true },
    },
    escape: true,
    errorMessage: "Error Name",
  },
});


