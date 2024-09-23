"use strict";

//model
import User from "../models/userModel.js";

import httpError from "http-errors";
import bcrypt from "bcryptjs";
import {SuccessResponse} from "../helpers/apiResponse.js";


export const HandleUserRegister = async (req, res, next) => {
    try {
        const {fullName, email, phoneNumber, password} = req.body;
        
        const existingUser = await User.findOne({ $or: [{email}, {password}] });

        if(existingUser) httpError(400, "user with this information already exist");

        const newUser = new User({fullName, email, phoneNumber, password});

        await newUser.save();
        
        return SuccessResponse(res, {
          statusCode : 200,
          message : "register user successfully",
        })
        
    } catch (error) {
        next(error);
    }
}



export const HandleUserLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) throw httpError(401, "Invalid email or password");


        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw httpError(401, "Invalid email or password");


        return SuccessResponse(res, {
            statusCode: 200,
            message: "Login successful",
            payload: {
                userId: user._id,
                fullName: user.fullName,
                email: user.email,
                phoneNumber : user.phoneNumber
            }
        });

    } catch (error) {
        next(error);
    }
};

