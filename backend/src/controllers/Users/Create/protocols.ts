import { User } from "../../../models/User.js";

export type createParams = Omit<User, "_id">;

export interface ICreateRepository {
  createUser(params: createParams): Promise<User>;
  verifyUser(name: string): Promise<boolean>;
}
