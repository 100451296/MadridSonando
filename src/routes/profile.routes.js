import { Router } from "express";
import { getProfile, patchProfle } from "../controllers/profile.controller.js";
import { profileSchema } from "../middlewares/validator/profile.validator.js";

const router = Router();

router.get('/', getProfile);
router.patch('/', profileSchema, patchProfle);

export default router;