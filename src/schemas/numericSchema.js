import { sanitazerSchema } from "./sanitizeSchema.js"

export const numericSchema = {
    ...sanitazerSchema,
    isFloat: {
      options: {
        min: 0, // Valor mínimo permitido (puedes cambiarlo según tus necesidades)
      },
    },
    
}