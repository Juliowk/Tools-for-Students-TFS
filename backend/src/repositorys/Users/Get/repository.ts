import { IGetRepository } from "../../../controllers/Users/Get/protocols.js";
import { MongoConnect } from "../../../database/MongoDB.js";
import { collections } from "../../../helpers/collections.js";
import { User } from "../../../models/User.js";

export class GetRepository implements IGetRepository {
  async getUser(): Promise<User[]> {
    return await MongoConnect.db
      .collection<User>(collections.users)
      .find()
      .toArray();
  }
}
