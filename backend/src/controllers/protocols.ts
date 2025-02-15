export interface IController {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}

export interface HttpRequest<T, P = unknown> {
  body?: T;
  params?: P;
  headers?: unknown;
}

export interface HttpResponse<T> {
  statusCode: HttpStatusCode;
  body: T;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  SERVER_ERROR = 500,
}

export type IIdparams = {
  id?: string;
};
