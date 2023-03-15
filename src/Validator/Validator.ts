import { NextFunction } from "express";
import Joi from "joi";
import { AppError, HttpCode } from "../utils/AppError";

export const Validator = (
  schemaName: Joi.ObjectSchema,
  body: object,
  next: NextFunction
) => {
  const value = schemaName.validate(body, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  try {
    value.error
      ? next(
          new AppError({
            httpCode: HttpCode.UNPROCESSABLE_ENTITY,
            message: value.error.details[0].message,
          })
        )
      : next();
  } catch (error) {
    new AppError({
      httpCode: HttpCode.UNPROCESSABLE_ENTITY,
      message: error,
    });
  }
};
