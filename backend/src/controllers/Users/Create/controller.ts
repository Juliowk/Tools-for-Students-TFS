import bcrypt from "bcrypt";
import z from "zod";

import { User } from "../../../models/User.js";
import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  IController,
} from "../../protocols.js";
import { createParams, ICreateRepository } from "./protocols.js";
import { formatErrorMessage } from "../../../helpers/formatErrorsMessages.js";

const createSchema = z.object({
  name: z.string().nonempty("Name must not be empty."),
  password: z.string().min(6, "Name must not be empty."),
  occupation: z.string().nonempty("Occupation must not be empty."),
});

export class CreateController implements IController {
  constructor(private readonly repository: ICreateRepository) {}
  async handle(
    httpRequest: HttpRequest<createParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: "Request Body not provided.",
        };
      }

      const validation = createSchema.safeParse(httpRequest.body);

      if (!validation.success) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: formatErrorMessage(validation.error.format()),
        };
      }

      const { name, password, occupation } = httpRequest.body;

      const userExist = await this.repository.verifyUser(name);

      if (userExist) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: "User already exists.",
        };
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const userCreated = await this.repository.createUser({
        name,
        password: encryptedPassword,
        occupation,
      });

      if (!userCreated) throw new Error("User not created.");

      return {
        statusCode: HttpStatusCode.CREATED,
        body: userCreated,
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          statusCode: HttpStatusCode.SERVER_ERROR,
          body: error.message,
        };
      }
      return {
        statusCode: HttpStatusCode.SERVER_ERROR,
        body: `Server Error - ${error}`,
      };
    }
  }
}
