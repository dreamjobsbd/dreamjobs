
"use strict";

//packages
import { body } from 'express-validator';

export const validateUserRegistration = [
  
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("name should be at least 3-30 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("invalid email address"),

  body("phoneNumber")
    .trim()
    .notEmpty()
    .withMessage("phone number is required")
    .matches(/^(\+880|880|0)1[3-9]\d{8}$/)
    .withMessage("invalid bangladesh phone number formate"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 4 })
    .withMessage("password should be at least 4 characters"),
];


export const validateActivateUser = [
  body("token")
  .notEmpty()
  .withMessage("token not found from authValidation")
]

export const validateUserLogin = [
  body("email")
   .trim()
   .notEmpty()
   .withMessage("you have to give an email for login"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("you have to give a password for login"),
];
