import { Request, Response, NextFunction } from "express";
import { Iuser } from "../Interfaces/User.interfaces";
import Usermodel from "../models/User.models";
import { AppError, HttpCode } from "../utils/AppError";
import { asyncHandler } from "../utils/AsyncHandler";

export const register = asyncHandler(
  async (req: Request<{}, {}, Iuser>, res: Response, next: NextFunction) => {
    const { email, password, name, confirmPassword } = req.body;

    const user = await Usermodel.create({
      email,
      password,
      name,
      confirmPassword,
    });

    if (!user) {
      new AppError({
        message: "Account not created",
        httpCode: HttpCode.BAD_REQUEST,
      });
    }
    return res.status(HttpCode.OK).json({
      message: "Success",
      data: user,
    });
  }
);
