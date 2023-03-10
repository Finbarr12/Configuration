import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import { AppError, HttpCode } from "./utils/AppError";

export const AppConfig = (app: Application) => {
  app
    .use(express.json())
    .use(morgan("dev"))
    .use(cors())

    //wrongRoutes

    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: `This route ${req.originalUrl} is not found`,
          httpCode: HttpCode.NOT_FOUND,
        })
      );
    })

    //errorhandler
    .use(errorHandler);
};
