
"use strict";

import { body } from "express-validator";

export const validateJobPost = [

    body("companyName")
        .trim()
        .notEmpty()
        .withMessage("please provide a company name"),

    body("jobTitle")
        .trim()
        .notEmpty()
        .withMessage("please provide a job Title"),
        
    body("jobDescription")
        .trim(),
        
    body("responsibilities")
        .trim()
        .notEmpty()
        .withMessage("please provide responsibilities"),
        
    body("skills")
        .trim()
        .notEmpty()
        .withMessage("please provide skills"),


    body("education")
        .trim()
        .notEmpty()
        .withMessage("please provide education"),
    
    body("expereince")
        .trim()
        .notEmpty()
        .withMessage("please provide a expereince"),

    body("salary")
        .trim()
        .notEmpty()
        .withMessage("please provide a salary"),
    
    body("employmentStatus")
       .trim()
       .notEmpty()
       .withMessage("please provide employment status"),

    body("applicationProcess")
        .trim()
        .notEmpty()
        .withMessage("Please provide a Application process")

]