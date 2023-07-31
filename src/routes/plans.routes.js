import { Router } from "express";
import { servicePlans, postProducts } from "../controllers/plans.controller.js";
import { plansValidator } from "../middlewares/validator/plans.validator.js";

const router = Router();

router.get("/:servicio", servicePlans);

router.post("/", plansValidator, postProducts);

export default router;
