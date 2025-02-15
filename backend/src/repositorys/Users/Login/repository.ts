import { ILoginRepository } from "../../../controllers/Users/Login/protocols.js";
import { MongoConnect } from "../../../database/MongoDB.js";
import { collections } from "../../../helpers/collections.js";
import { User } from "../../../models/User.js";

export class LoginRepository implements ILoginRepository {
  async findUser(name: string): Promise<User | null> {
    const user = await MongoConnect.db
      .collection<User>(collections.users)
      .findOne({ name });
    return user;
  }
}
