
"use strict";

//packages
import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new Schema(
  {
    fullName: {
      type: String,
    },

    gender: {
      type: String,   
    },

    email: {
      type: String,
      unique: true,
    },

    phoneNumber: {
      type: String,
      unique: [true, "already have an account with this number"],
    },

    password: {
      type: String,
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