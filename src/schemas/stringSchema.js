import { sanitazerSchema } from "./sanitizeSchema.js";

export const stringSchema = {
  ...sanitazerSchema,
  isString: { bail: true },
};
