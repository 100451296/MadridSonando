import { optionsNormalize } from "./emailSchema.js";
import * as expressValidator from "express-validator";
import { userNotExists } from "../../libs/userNotExists.js";

const { checkSchema, notEmpty, isEmail, isLength, normalizeEmail, escape, bail,  } = expressValidator;


export const emailSchemaPost = checkSchema({
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

      custom: {
        options: async (value) => await userNotExists(value),
      },
      errorMessage: "Error Email Address",
    },
  });

