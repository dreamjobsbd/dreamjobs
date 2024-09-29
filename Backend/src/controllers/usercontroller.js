"use strict";

//packages
import httpError from "http-errors";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

//model
import User from "../models/userModel.js";

//env var
import {jwtPrivatekey, clientUrl} from "../hiddenEnv.js"

//helper
import {ErrorResponse, SuccessResponse} from "../helpers/apiResponse.js";
import ProcessEmail from "../helpers/processEmail.js";


export const UserRegistration = async (req, res, next) => {
    try {
        const {fullName, email, phoneNumber, password} = req.body;
        
        const existUser = await User.findOne({$or : [{email}, {phoneNumber}]});
        
        //check if already exist user with email & phoneNumber
        if(existUser) {
            return ErrorResponse(res, {
                statusCode : 422,
                message :"This email or phone number is already registered"
            })
        }


        //create a token with the user data
        const userInfo = {fullName, email, phoneNumber, password};
        const options = {expiresIn : "5m"}
        const token = jsonwebtoken.sign(userInfo, jwtPrivatekey, options);
        

        //prepare an email
        const emailData = {
            fullName,email,
            subject : "Activate Email From Flexywork",
            html : ` <h2>Hello ${fullName}</h2>
            <p>please click on the following link to activate your email</p>
            <a href="${clientUrl}user/activate/${token}" target="blank">
            activate account</a>`

        }

        ProcessEmail(emailData);


        return SuccessResponse(res, {
            statusCode : 200,
            message : `go to your ${email} and click on the given link to activate account`,
            payload : { token }
        })
    
    } catch (error) {
        next(error);
    }
}


export const ActivateUser = async (req, res, next) => {
  try {

     //get the token from request body
     const token = req.body.token;

     //if token not provided the thow error
     if (!token) throw httpError(404, "Token is not found");
 
     //verify token using the jwt private key
     const decode = jsonwebtoken.verify(token, jwtPrivatekey);
 
     //if the token is invalid or expired throw and error
     if (!decode) throw httpError(404, "unable to verify user");
 
     //create a new user document in the database using the decoded user information
     await User.create(decode);
 
     //send a success response
     return SuccessResponse(res, {
       message: "user registration successful",
     });
    
  } catch (error) {
      //handle specific token related error
      if (error.name === "TokenExpiredError") {
        throw httpError(401, "Token has expired");
      } else if (error.name === "JsonWebTokenError") {
        throw httpError(401, "Invalid Token");
      } else {
        //pass other error to next middlewares
        next(error);
      }
  }
};


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


export const GetAllUser = async (req, res, next) => {
    try {
        const allUser = await User.find({});

        return SuccessResponse(res, {
            statusCode : 200,
            message : "return all the user",
            payload : {
                allUser
            }
        })
    } catch (error) {
        next(error);
    }
}


export const GetSingleUser = async (req, res, next) => {
    try {
       const { id } = req.params;
       const singleUserById = await User.findById({_id : id});

       return SuccessResponse(res, {
        statusCode : 200,
        message : "retuen a user",
        payload : { singleUserById }
       })
    } catch (error) {
        next(error)
    }
}


