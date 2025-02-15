import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  IController,
  IIdparams,
} from "../../protocols.js";
import { IDeleteRepository } from "./protocols.js";

export class DeleteController implements IController {
  constructor(private readonly repository: IDeleteRepository) {}
  async handle(
    httpRequest: HttpRequest<unknown, IIdparams>
  ): Promise<HttpResponse<string>> {
    try {
      if (!httpRequest.params) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: `Query params not provided.`,
        };
      }

      const { id } = httpRequest.params;

      if (!id) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: `Id not provided.`,
        };
      }

      const userexist = await this.repository.verifyUser(id);

      if (!userexist) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: `User not exist.`,
        };
      }

      const userAdm = await this.repository.userOccupation(id);

      if (!userAdm) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: `Deleting an administrator is not allowed.`,
        };
      }

      await this.repository.deleteUser(id);

      return {
        statusCode: HttpStatusCode.OK,
        body: `User deleted successful.`,
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          statusCode: HttpStatusCode.SERVER_ERROR,
          body: `Server Error - ${error.message}`,
        };
      }
      return {
        statusCode: HttpStatusCode.SERVER_ERROR,
        body: `Server Error`,
      };
    }
  }
}
