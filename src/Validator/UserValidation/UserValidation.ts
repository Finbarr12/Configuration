import { RequestHandler } from "express";
import { Validator } from "../Validator";
import { UserSchema } from "./UserSchema";

export const registerValidation: RequestHandler = (req, res, next) =>
  Validator(UserSchema.register, req.body, next);

export const loginValidation: RequestHandler = (req, res, next) => {
  Validator(UserSchema.login, req.body, next);
};
