import { Router } from "express";
import { getPage, getProduct, postProduct } from "../controllers/products.controller.js";
import { productSchema } from "../middlewares/validator/products.validator.js";

const router = Router();

router.get('/', getPage);
router.get('/:id', getProduct);

router.post('/', productSchema, postProduct);

//router.post('/importData', importData);

export default router