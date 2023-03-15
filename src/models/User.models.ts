import { Schema, model } from "mongoose";
import { Iuser } from "../Interfaces/User.interfaces";

const UserSchema: Schema<Iuser> = new Schema({
  name: {
    type: String,
    required: [true, "Input your name"],
  },
});
