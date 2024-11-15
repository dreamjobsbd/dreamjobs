
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
       
    body("salary")
       .trim()
       .notEmpty()
       .withMessage("please provide a salary"),
    
    body("applicationType")
       .trim()
       .notEmpty()
       .withMessage("Please provide application type")
       .isIn(["Email", "Form", "Web Link"])
       .withMessage("please provide Email, Form or Link to Application"),


    body("applicationProcess")
       .trim()
       .notEmpty()
       .withMessage("Please provide a Application process"),   
        
    body("jobDescription")
        .trim(),

    body("education")
        .trim(),
        
    body("skills")
        .trim(),
    
    body("responsibilities")
        .trim(),
    
    body("experience")
        .trim(),

    body("benefits")
    .trim(),
    
    body("employmentStatus")
       .trim(),

    body("locationType")
    .trim(),

    body("jobLocation")
    .trim(),

    body("gender")
    .trim(),

    body("age")
    .trim(),

    body("vacancy")
    .trim(), 

    body("source")
    .trim(),
    
    body("deadline")
    .trim(),

    body("optionalInfo")
    .trim(),

]