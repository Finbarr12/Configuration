import { RequestHandler } from "express";
import { Validator } from "../Validator";
import { UserScema } from "./UserSchema";

export const registerValidation: RequestHandler = (req, res, next) =>
  Validator(UserScema.register, req.body, next);
