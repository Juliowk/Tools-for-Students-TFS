import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import environment_variables from "./environmentVariables.js";

export const createToken = (idUser: ObjectId) => {
  return jwt.sign({ id: idUser }, environment_variables.JWT_SECRET!, { expiresIn: "1h" });
};
