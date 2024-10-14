
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

    body("category")
       .trim()
       .notEmpty()
       .withMessage("please provide categoy for this job"),    
        
    body("jobDescription")
        .trim(),

    body("education")
        .trim()
        .notEmpty()
        .withMessage("please provide education"),
        
    body("skills")
        .trim()
        .notEmpty()
        .withMessage("please provide skills"),
    
    body("responsibilities")
        .trim()
        .notEmpty()
        .withMessage("please provide Responsibilities"),    

    
    body("experience")
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


    body("locationType")
    .trim(),

    body("jobLocation")
    .trim(),

    body("gender")
     .trim(),

    body("age")
     .trim(), 

       
    body("applicationProcess")
        .trim()
        .notEmpty()
        .withMessage("Please provide a Application process"),
    

]