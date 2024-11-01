
//packages
import httpError from "http-errors";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

//model
import User from "../models/userModel.js";

//env variables
import { jwtRefreshKey, jwtAccessKey } from "../hiddenEnv.js";

//api response
import { SuccessResponse, ErrorResponse } from "../helpers/apiResponse.js";

//helper
// import ProcessEmail from "../helpers/processEmail.js";
import { SetAccessTokenCookie, SetRefreshTokenCookie } from "../helpers/cookies.js";


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

        const userInfo = {fullName, email, phoneNumber, password};

        await User.create(userInfo)


        //create a token with the user data

        // const options = {expiresIn : "5m"}
        // const token = jsonwebtoken.sign(userInfo, jwtPrivatekey, options);
        

        //prepare an email
        // const emailData = {
        //     fullName,email,
        //     subject : "Activate Email From Flexywork",
        //     html : ` <h2>Hello ${fullName}</h2>
        //     <p>please click on the following link to activate your email</p>
        //     <a href="${clientUrl}/user/activate/${token}" target="blank">
        //     activate account</a>`

        // }
        
        // ProcessEmail(emailData);


        return SuccessResponse(res, {
            statusCode : 200,
            message : `user registration complete`,
        })
    
    } catch (error) {
        next(error);
    }
}


// export const ActivateUser = async (req, res, next) => {
//   try {

//      //get the token from request body
//      const token = req.body.token;
 
//      //verify token using the jwt private key
//      const decode = jsonwebtoken.verify(token, jwtPrivatekey);
 
//      //if the token is invalid or expired throw and error
//      if (!decode) throw httpError(404, "unable to verify user");
 
//      //create a new user document in the database using the decoded user information
//      await User.create(decode);
 
//      //send a success response
//      return SuccessResponse(res, {
//        message: "user registration successful",
//      });
    
//   } catch (error) {
//       //handle specific token related error
//       if (error.name === "TokenExpiredError") {
//         throw httpError(401, "Token has expired");
//       } else if (error.name === "JsonWebTokenError") {
//         throw httpError(401, "Invalid Token");
//       } else {
//         //pass other error to next middlewares
//         next(error);
//       }
//   }
// };


export const UserLogin = async (req, res, next) => {

    try {
        const { email, password } = req.body;
    
        //check the user is exist or not
        const user = await User.findOne({email : email});
    
        //if user does not exist
        if (!user) {
          throw httpError(404, "user does not exist , please register");
        }
    
        //check the given password match or not
        const isPasswordMatch = await bcrypt.compare(password, user.password);
    
        //if password does not match throw error
        if (!isPasswordMatch) {
          throw httpError(401, "passowrd is wrong");
        }
    
        //if user banned
        if (user.isBanned) {
          throw httpError(403, "you are banned , please contact to authority");
        }
    
        //create a jwt refresh token
        let options;
        options = {expiresIn: "10d"}
        const refreshToken = jsonwebtoken.sign({ user }, jwtRefreshKey, options);
    
        //set refresh token
        SetRefreshTokenCookie(res, refreshToken);
    
        //create a jwt access key
        options = {expiresIn: "15m"}
        const accessToken = jsonwebtoken.sign({ user }, jwtAccessKey, options);
    
        //set accessToken to cookie
        SetAccessTokenCookie(res, accessToken);
    
        //if all is well send success response
        return SuccessResponse(res, {
          statusCode: 200,
          message: "user login succesfully",
        });

      } catch (error) {
        next(error);
      }

};



// export const UserLogout = (req, res, next) => {
//     try {

//         //clear the refresh token cookie
//         res.clearCookie("refreshToken");
//         //clear the access token cookie
//         res.clearCookie("accessToken");
    
//         //return successful response
//         return SuccessResponse(res, {
//           statusCode: 200,
//           message: "user logged out successfully",
//         });
//       } catch (error) {
//         next(error);
//       }
// }

export const UserLogout = (req, res, next) => {
  try {
      // Clear refresh token with proper options
      res.clearCookie('refreshToken', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
          path: '/'
      });

      // Clear access token with proper options
      res.clearCookie('accessToken', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
          path: '/'
      });

      return SuccessResponse(res, {
          statusCode: 200,
          message: "user logged out successfully",
      });
  } catch (error) {
      next(error);
  }
};



export const HandleRefreshToken = async (req, res, next) => {
  
    try {
      
        //get the refresh token from req cookie
        const oldRefreshToken = req.cookies.refreshToken; 
    
        if (!oldRefreshToken) {
          throw httpError(401, "no refres token found, please login");
        }
    
        //verify the refresh token
        let decodedToken;
        try {
          decodedToken = jsonwebtoken.verify(oldRefreshToken, jwtRefreshKey);
        } catch (error) {
          if (error instanceof jsonwebtoken.TokenExpiredError) {
            throw httpError(401, "token is expired please login");
          }
          throw (401, "invalid refreshToken please login");
        }
    
        //find user from decodedToken
        const id = decodedToken.user._id;
        const user = await User.findById(id);
    
        //create a jwt access key
        const options = {expiresIn : "15m"}
        const accessToken = jsonwebtoken.sign({ user }, jwtAccessKey, options);
    
        //set accessToken to cookie
        SetAccessTokenCookie(res, accessToken);
    
        return SuccessResponse(res, {
          statusCode: 200,
          message: "new access token generated",
        });
      } catch (error) {
        next(error);
      }
};


export const GetCurrentUser = async (req, res, next) => {
  try {
    // Get the access token from req cookies
    const accessToken = req.cookies.accessToken;

    // If there's no access token, throw an error
    if (!accessToken) {
      throw httpError(401, "No access token found, please login");
    }

    // Verify the access token
    const decodedToken = jsonwebtoken.verify(accessToken, jwtAccessKey);

    // If decodedToken is empty throw an error
    if (!decodedToken) {
      throw httpError(401, "Invalid Access Token, please login again");
    }

    // Get the user ID from the decoded token
    const userId = decodedToken.user._id;

    // Find the user and remove password 
    const user = await User.findById(userId).select("-password");

    // If user not found, throw an error
    if (!user) {
      throw httpError(404, "User not found");
    }

    // Return the user data
    return SuccessResponse(res, {
      statusCode: 200,
      message: "User data retrieved successfully",
      payload: { user },
    });
  } catch (error) {
    next(error);
  }
};