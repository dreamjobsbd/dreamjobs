
"use strict";

//packages
import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import validate from "validator";


const userSchema = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
      minLength: [3, "name is too short"],
      maxLength: [30, "name is too long"],
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return validate.isEmail(value);
        },
        message :`invalid email address`
      },
    },

    phoneNumber: {
      type: Number,
      required: [true, "you have to give a phone number"],
      unique: [true, "already have an account with this number"],
      trim: true,
      validate : {
        validator : function (v) {
          return /^(\+880|880|0)1[3-9]\d{8}$/.test(v); 
        },
        message : `invalid phone number`
      },
      minLength: [9, "number is too short"],
      maxLength: [16, "number is too long"],
    },

    password: {
      type: String,
      required: true,
      minLength: [4, "password is too short"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(12)),
    },

    cv: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);

export default User;