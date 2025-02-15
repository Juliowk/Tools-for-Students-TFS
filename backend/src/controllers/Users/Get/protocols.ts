import { User } from "../../../models/User.js";

export interface IGetRepository {
    getUser(): Promise<User[]>
}