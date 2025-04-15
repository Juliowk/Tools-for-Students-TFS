import { User } from "../../../models/User.js";

export type createParams = Omit<User, "_id">;

export interface ICreateRepository {
  createUser(params: createParams): Promise<User>;
  verifyUsername(name: string): Promise<boolean>;
  verifyUserEmail(email: string): Promise<boolean>;
}
