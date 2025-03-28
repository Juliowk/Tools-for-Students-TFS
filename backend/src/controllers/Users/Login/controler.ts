import bcrypt from "bcrypt";

import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  IController,
} from "../../protocols.js";

import { ILoginRepository, UserParams } from "./protocols.js";
import { createToken } from "../../../helpers/createToken.js";

export class LoginController implements IController {
  constructor(private readonly repository: ILoginRepository) {}
  async handle(
    httpRequest: HttpRequest<UserParams>
  ): Promise<HttpResponse<string>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: "Request body not provided.",
        };
      }
      const { name, password } = httpRequest.body;

      if (!name || !password) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: "Username or password not provided.",
        };
      }

      const user = await this.repository.findUser(name);

      if (!user) {
        return {
          statusCode: HttpStatusCode.UNAUTHORIZED,
          body: "Invalid username or password.",
        };
      }

      const passwordVerifield = await bcrypt.compare(password, user.password);

      if (!passwordVerifield) {
        return {
          statusCode: HttpStatusCode.UNAUTHORIZED,
          body: "Invalid username or password.",
        };
      }

      const token = createToken(user._id);

      if (!token) throw new Error("Token not created.");

      return {
        statusCode: HttpStatusCode.OK,
        body: token,
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
        body: `Server Error`,
      };
    }
  }
}
