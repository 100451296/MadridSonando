import { Router } from "express";
import {login, register, logout, getAuthenticated} from "../controllers/auth.controller.js"
import { requireAuthentication, preventAccessIfAuthenticated } from "../middlewares/auth.js";
import { registerSchema } from "../middlewares/validator/auth/register.validator.js";
import { loginSchema } from "../middlewares/validator/auth/login.validator.js";

const router = Router()

router.post('/register', preventAccessIfAuthenticated, registerSchema, register);

router.post('/login', preventAccessIfAuthenticated, loginSchema, login);

router.post('/logout', requireAuthentication, logout);

router.get('/authenticated', requireAuthentication, getAuthenticated);

export default router
