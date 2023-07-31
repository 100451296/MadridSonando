import { sanitazerSchema } from "./sanitizeSchema.js"

export const intSchema = {
    ...sanitazerSchema,
    isInt: {
        min: 18, // El número entero debe ser igual o mayor que 18
        max: 99, // El número entero debe ser igual o menor que 99
      }
}