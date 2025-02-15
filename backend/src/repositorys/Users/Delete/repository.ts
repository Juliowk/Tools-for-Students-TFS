import { ObjectId } from "mongodb";
import { IDeleteRepository } from "../../../controllers/Users/Delete/protocols.js";
import { MongoConnect } from "../../../database/MongoDB.js";
import { collections } from "../../../helpers/collections.js";
import { User } from "../../../models/User.js";

export class DeleteRepository implements IDeleteRepository {
  async userOccupation(id: string): Promise<boolean> {
    const user = await MongoConnect.db
      .collection<User>(collections.users)
      .findOne({ _id: new ObjectId(id) });

    if (!user) throw new Error("User not found.");

    if (user.occupation !== "USER") return false

    return true
  }

  async verifyUser(id: string): Promise<boolean> {
    const user = await MongoConnect.db
      .collection<User>(collections.users)
      .findOne({ _id: new ObjectId(id) });

    if (!user) return false;

    return true;
  }
  
  async deleteUser(id: string): Promise<void> {
    const { deletedCount } = await MongoConnect.db
      .collection(collections.users)
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) throw new Error("User not deleted.");
  }
}
