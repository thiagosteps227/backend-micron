import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { router } from "./http";

import createConnection from "./typeorm";

import "./shared/index";
import { AppError } from "./AppError";
import cors from "cors";

createConnection();

const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

//error handling in case of an error not catched by the application
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
