export const sanitazerSchema = {
  in: ["body"],
  notEmpty: { bail: true },
  trim: { bail: true }, // Desinfectante
  escape: { bail: true },
};
