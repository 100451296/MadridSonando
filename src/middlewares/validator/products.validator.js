import { ProductNameSchema } from "../../schemas/products/ProductNameSchema.js";
import { BrandSchema } from "../../schemas/products/BrandSchema.js";
import { PriceSchema } from "../../schemas/products/PriceSchema.js";
import { ImageUrlSchema } from "../../schemas/products/ImageUrl.js";
import { DiscountPriceSchema } from "../../schemas/products/DiscountPriceSchema.js";
import { QuantitySchema } from "../../schemas/products/QuantitySchema.js";
import { CategorySchema } from "../../schemas/products/CategorySchema.js";
import { SubCategorySchema } from "../../schemas/products/SubCategorySchema.js";
import { AbsoluteUrlSchema } from "../../schemas/products/AbsoluteUrl.js";
import { validateData } from "../validators.js";

export const productSchema = [
  ProductNameSchema,
  BrandSchema,
  PriceSchema,
  ImageUrlSchema,
  DiscountPriceSchema,
  QuantitySchema,
  CategorySchema,
  SubCategorySchema,
  AbsoluteUrlSchema,
  validateData
];

export const filterProductSchema = {
  ProductNameSchema,
  BrandSchema,
  PriceSchema,
  ImageUrlSchema,
  DiscountPriceSchema,
  QuantitySchema,
  CategorySchema,
  SubCategorySchema,
  AbsoluteUrlSchema,
  validateData
};
