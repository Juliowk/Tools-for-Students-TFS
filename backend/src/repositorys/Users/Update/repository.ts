import { ObjectId } from "mongodb";
import {
  IUpdateRepository,
  IUpdateParams,
} from "../../../controllers/Users/Update/protocols.js";
import { MongoConnect } from "../../../database/MongoDB.js";
import { collections } from "../../../helpers/collections.js";
import { User } from "../../../models/User.js";

export class UpdateRepository implements IUpdateRepository {
  async verifyUser(id: string): Promise<boolean> {
    const user = await MongoConnect.db
      .collection(collections.users)
      .findOne({ _id: new ObjectId(id) });

    if (!user) return false;

    return true;
  }

  async updateUser(id: string, data: IUpdateParams): Promise<User> {
    const modifed = await MongoConnect.db
      .collection(collections.users)
      .updateOne({ _id: new ObjectId(id) }, { $set: data });

    if (!modifed) throw new Error("Unable to update user.");

    const userUpdate = await MongoConnect.db
      .collection<User>(collections.users)
      .findOne({ _id: new ObjectId(id) });

    if (!userUpdate) throw new Error("User not found.");

    return userUpdate;
  }
}
