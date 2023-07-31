import { emailSchema } from "../../../schemas/auth/emailSchema.js";
import { passwordSchema } from "../../../schemas/auth/passwordSchema.js";
import { validateData } from "../../validators.js";

export const loginSchema = [
    emailSchema, 
    passwordSchema,
    validateData
]