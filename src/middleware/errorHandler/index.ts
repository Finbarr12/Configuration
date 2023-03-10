import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../../utils/AppError";

const DevError = (err: AppError, res: Response) => {
  return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    err: err,
    message: err.message,
    status: err.httpCode,
  });
};

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  DevError(err, res);
};
