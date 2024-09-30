
import express from "express";

import { UserRegistration, ActivateUser, UserLogin } from "../controllers/authController.js";


const authRoute = express.Router();


authRoute.post("/registration",UserRegistration);

authRoute.post("/activate", ActivateUser);

authRoute.post("/login", UserLogin);

export default authRoute
