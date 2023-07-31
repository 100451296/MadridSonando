import { Router } from "express";
import { getAppoinment, postAppointment } from "../controllers/appointments.controller.js";
import { appointmentsValidator } from "../middlewares/validator/appointments.validator.js";
import { aviableDate } from "../libs/aviableDate.js";

const router = Router();

router.get('/:servicio', getAppoinment);
router.post('/', appointmentsValidator, aviableDate, postAppointment);

export default router;