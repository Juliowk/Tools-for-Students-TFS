import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { HttpStatusCode } from "../controllers/protocols.js";
import environment_variables from "../helpers/environmentVariables.js";
import { ObjectId } from "mongodb";
import { MongoConnect } from "../database/MongoDB.js";
import { collections } from "../helpers/collections.js";

interface JWTPayload {
  id: string;
}

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      res.status(HttpStatusCode.BAD_REQUEST).json("Header not provided.");
      return;
    }

    const token = authorization?.split(" ")[1];

    if (!token) {
      res.status(HttpStatusCode.BAD_REQUEST).json("Token not provided.");
      return;
    }

    const { id } = jwt.verify(
      token,
      environment_variables.JWT_SECRET!
    ) as JWTPayload;

    if (!id) {
      res.status(HttpStatusCode.UNAUTHORIZED).json("Token has no id.");
      return;
    }

    const user = await MongoConnect.db
      .collection(collections.users)
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      res.status(HttpStatusCode.UNAUTHORIZED).json("User does not exist.");
      return;
    }

    next();
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(HttpStatusCode.UNAUTHORIZED)
        .json(`Unauthorized - ${error.message}.`);
    }
  }
};
