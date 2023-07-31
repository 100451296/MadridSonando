import { DescriptionSchema } from "../../schemas/plans/DescriptionSchema.js";
import { NameSchema } from "../../schemas/plans/NameSchema.js";
import { PricePlanSchema } from "../../schemas/plans/PricePlanSchema.js";
import { ServiceIDSchema } from "../../schemas/plans/ServiceIdSchema.js";
import { validateData } from "../validators.js";


export const plansValidator = [
    DescriptionSchema,
    NameSchema, 
    PricePlanSchema, 
    ServiceIDSchema,
    validateData
]

export const filterPlansValidator = {
    DescriptionSchema,
    NameSchema, 
    PricePlanSchema, 
    ServiceIDSchema,
    validateData
}