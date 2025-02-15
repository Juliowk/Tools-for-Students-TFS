import { User } from "../../../models/User.js";

export interface IUpdateParams {
  name?: string;
  password?: string;
  occupation?: string;
}
export interface IUpdateRepository {
  updateUser(id: string, data: IUpdateParams): Promise<User>;
  verifyUser(id: string): Promise<boolean>;
}
