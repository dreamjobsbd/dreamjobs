
import { body } from "express-validator";

export const validateCategory = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("please provide a category name"),
]

