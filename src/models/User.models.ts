import { Schema, model } from "mongoose";
import { Iuser } from "../Interfaces/User.interfaces";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";

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
      required: [true, "Input password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Input password"],
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

UserSchema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) next();

  const salt = await bcrypt.genSalt(12);
  user.password = await bcrypt.hash(user.password, salt);
  user.confirmPassword = user.password;
});

const Usermodel = model<Iuser>("user", UserSchema);

export default Usermodel;
