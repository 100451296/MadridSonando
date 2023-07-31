import { emailSchema } from "../../schemas/auth/emailSchema.js";
import { nameSchema } from "../../schemas/auth/nameSchema.js";
import { direccionSchema } from "../../schemas/auth/direccionSchema.js";
import { validateData } from "../validators.js";

export const profileSchema = [
  emailSchema,
  nameSchema,
  direccionSchema,
  validateData,
];
