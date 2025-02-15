import bcrypt from "bcrypt";
import { MongoConnect } from "../database/MongoDB.js";
import { User } from "../models/User.js";
import { collections } from "./collections.js";

export const createDefaultUser = async (user: Omit<User, "_id">) => {
  const userExist = await MongoConnect.db
    .collection("users")
    .findOne({ name: user.name });

  if (userExist) {
    console.log("User default already exist");
    return;
  }

  const encryptedPassword = await bcrypt.hash(user.password, 10);

  const result = await MongoConnect.db
    .collection(collections.users)
    .insertOne({ ...user, password: encryptedPassword });

  if (!result.insertedId) throw new Error("Failed to create user");

  console.log(`User created!`);
};
