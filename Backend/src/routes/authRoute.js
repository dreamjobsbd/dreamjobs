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

//middlewares
import { IsLoggedIn, IsLoggedOut } from "../middlewares/authMiddleware.js";


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


authRoute.post("/activate", validateActivateUser, RunValidation, ActivateUser);

authRoute.post("/login", validateUserLogin, IsLoggedOut, RunValidation, UserLogin);

authRoute.post("/logout", IsLoggedIn, UserLogout);

authRoute.get("/refresh-token", HandleRefreshToken);

authRoute.get("/current-user", GetCurrentUser);


export default authRoute;
