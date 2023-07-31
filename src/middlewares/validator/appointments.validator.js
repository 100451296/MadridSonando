import { serviceNameSchema } from "../../schemas/services/serviceNameSchema.js";
import { appointmentDateSchema } from "../../schemas/services/appointmentDateSchema.js";

import { validateData } from "../validators.js";

export const appointmentsValidator = [
    serviceNameSchema, 
    appointmentDateSchema,
    validateData
];
