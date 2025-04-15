import { z } from "zod";
import bcrypt from "bcrypt";

import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  IController,
} from "../../protocols.js";

import { ILoginRepository, UserParams } from "./protocols.js";
import { createToken } from "../../../helpers/createToken.js";
import { formatErrorMessage } from "../../../helpers/formatErrorsMessages.js";

const loginSchema = z.object({
  email: z.string().email("Invalid e-mail"),
  password: z.string().min(6, "Name must not be empty."),
});
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
      const validation = loginSchema.safeParse(httpRequest.body);

      if (!validation.success) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: formatErrorMessage(validation.error.format()),
        };
      }

      const { email, password } = httpRequest.body;

      if (!email || !password) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: "Email or password not provided.",
        };
      }

      const user = await this.repository.findUser(email);

      if (!user) {
        return {
          statusCode: HttpStatusCode.UNAUTHORIZED,
          body: "Invalid email or password.",
        };
      }

      const passwordVerifield = await bcrypt.compare(password, user.password);

      if (!passwordVerifield) {
        return {
          statusCode: HttpStatusCode.UNAUTHORIZED,
          body: "Invalid email or password.",
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
