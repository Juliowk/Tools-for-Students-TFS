import {
  createParams,
  ICreateRepository,
} from "../../../controllers/Users/Create/protocols.js";
import { MongoConnect } from "../../../database/MongoDB.js";
import { collections } from "../../../helpers/collections.js";
import { User } from "../../../models/User.js";

export class CreateRepository implements ICreateRepository {
  async verifyUsername(name: string): Promise<boolean> {
    const user = await MongoConnect.db
      .collection(collections.users)
      .findOne({ name });

    if (!user) return false;

    return true;
  }

  async verifyUserEmail(email: string): Promise<boolean> {
    const user = await MongoConnect.db
      .collection(collections.users)
      .findOne({ email });

    if (!user) return false;

    return true;
  }

  async createUser(params: createParams): Promise<User> {
    const { insertedId } = await MongoConnect.db
      .collection(collections.users)
      .insertOne(params);

    const user = await MongoConnect.db
      .collection<User>(collections.users)
      .findOne({ _id: insertedId });

    if (!user) throw new Error("User not created.");

    return user;
  }
}
