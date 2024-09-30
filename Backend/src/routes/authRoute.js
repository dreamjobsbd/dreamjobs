
import express from "express";

import { UserRegistration, ActivateUser, UserLogin } from "../controllers/authController.js";

//validation
import { validateUserRegistration, validateActivateUser, validateUserLogin }
from "../validation/authValidation.js";
import RunValidation from "../validation/index.js"

const authRoute = express.Router();


authRoute.post("/registration",validateUserRegistration, RunValidation, UserRegistration);

authRoute.post("/activate", validateActivateUser, RunValidation, ActivateUser);

authRoute.post("/login",validateUserLogin, RunValidation, UserLogin);

export default authRoute
