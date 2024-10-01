"use strict"

import express from "express";

import {
  UserRegistration,
  ActivateUser,
  UserLogin,
  UserLogout,
  HandleRefreshToken,
  GetCurrentUser,
} from "../controllers/authController.js";

//validation
import {
  validateUserRegistration,
  validateActivateUser,
  validateUserLogin,
} from "../validation/authValidation.js";
import RunValidation from "../validation/index.js";

const authRoute = express.Router();

authRoute.post(
  "/registration",
  validateUserRegistration,
  RunValidation,
  UserRegistration
);

authRoute.get("/refresh-token", HandleRefreshToken);

authRoute.get("/current-user", GetCurrentUser);
authRoute.post("/activate", validateActivateUser, RunValidation, ActivateUser);

authRoute.post("/login", validateUserLogin, RunValidation, UserLogin);

authRoute.post("/logout", UserLogout);


export default authRoute;
