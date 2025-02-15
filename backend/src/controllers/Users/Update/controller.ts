import { z } from "zod";
import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  IController,
  IIdparams,
} from "../../protocols.js";
import { IUpdateParams, IUpdateRepository } from "./protocols.js";
import { formatErrorMessage } from "../../../helpers/formatErrorsMessages.js";

const updateSchema = z.object({
  name: z.string().nonempty("Name must not be empty.").optional(),
  occupation: z.string().nonempty("Occupation must not be empty.").optional(),
}).strict();

export class UpdateController implements IController {
  constructor(private readonly repository: IUpdateRepository) {}
  async handle(
    httpRequest: HttpRequest<IUpdateParams, IIdparams>
  ): Promise<HttpResponse<string>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: `Request body not provided.`,
        };
      }

      if (!httpRequest.params?.id) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: `Id params not provided.`,
        };
      }

      const validation = updateSchema.safeParse(httpRequest.body);

      if (!validation.success) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: formatErrorMessage(validation.error.format()),
        };
      }

      const { id } = httpRequest.params;

      const userExist = await this.repository.verifyUser(id);

      if (!userExist) {
        return {
          statusCode: HttpStatusCode.BAD_REQUEST,
          body: "User not found.",
        };
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...data } = httpRequest.body;

      await this.repository.updateUser(id, data);

      return {
        statusCode: HttpStatusCode.OK,
        body: `Update successful.`,
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
        body: `Server Error - ${error}`,
      };
    }
  }
}
