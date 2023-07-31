import { Router } from "express";
import auth from './auth.routes.js';
import plans from './plans.routes.js';
import shop from './products.routes.js';
import profile from "./profile.routes.js";
import appointments from "./appointments.routes.js";

import { requireAuthentication } from "../middlewares/auth.js";

const mainRouter = Router();

mainRouter.use('/plans', plans);
mainRouter.use('/auth', auth);
mainRouter.use('/products', shop);
mainRouter.use('/profile', requireAuthentication, profile);
mainRouter.use('/citas', requireAuthentication, appointments);

export default mainRouter

