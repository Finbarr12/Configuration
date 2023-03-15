import { Schema, model } from "mongoose";
import { Iuser } from "../Interfaces/User.interfaces";
import isEmail from "validator/lib/isEmail";

const UserSchema: Schema<Iuser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Input your name"],
    },
    email: {
      type: String,
      required: [true, "Input an email"],
      validate: [isEmail, "Please enter a valid email"],
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: [7, "Pasword minimum of six characters"],
    },
    role: {
      enum: ["user", "admin", "manager"],
      default: "user",
      message: "You must either be a user, admin or manager",
    },
  },
  { timestamps: true }
);

const Usermodel = model<Iuser>("user", UserSchema);

export default Usermodel;
