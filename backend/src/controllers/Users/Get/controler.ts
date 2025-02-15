import { User } from "../../../models/User.js";
import { HttpResponse, HttpStatusCode, IController } from "../../protocols.js";
import { IGetRepository } from "./protocols.js";

export class GetController implements IController {
  constructor(private readonly repository: IGetRepository) {}
  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.repository.getUser();
      return {
        statusCode: HttpStatusCode.OK,
        body: users,
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
        body: "Server Error - Get Users",
      };
    }
  }
}
