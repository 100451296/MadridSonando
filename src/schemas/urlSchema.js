import { stringSchema } from "./stringSchema.js"

export const urlSchema = {
    ...stringSchema,
    isLength: { options: { max: 455 } },
    errorMessage: "Error Url",
}