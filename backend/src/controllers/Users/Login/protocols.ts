import { User } from "../../../models/User.js";

export type UserParams = Omit<User, "occupation">;

export interface ILoginRepository {
    findUser(name: string): Promise<User | null>
}