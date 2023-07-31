import { nameSchema } from "../../../schemas/auth/nameSchema.js";
import { emailSchemaPost } from "../../../schemas/auth/emailSchemaPost.js";
import { passwordSchemaPost } from "../../../schemas/auth/passwordSchemaPost.js";
import { direccionSchema } from "../../../schemas/auth/direccionSchema.js";
import { validateData } from "../../validators.js";


export const registerSchema = [
  nameSchema,
  emailSchemaPost,
  passwordSchemaPost,
  direccionSchema,
  validateData,
];