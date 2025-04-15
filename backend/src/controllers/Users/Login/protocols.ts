import { User } from "../../../models/User.js";

export type UserParams = Omit<User, "occupation">;

export interface ILoginRepository {
    findUser(email: string): Promise<User | null>
}