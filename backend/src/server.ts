import express from "express";
import cors from "cors";
import environment_variables from "./helpers/environmentVariables.js";
import { MongoConnect } from "./database/MongoDB.js";
import { createDefaultUser } from "./helpers/createDefaultUser.js";
import { User } from "./models/User.js";
import routerUsers from "./routes/Users.js";

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  const PORT = environment_variables.PORT!;

  await MongoConnect.connect();

  const userDefault: Omit<User, "_id"> = {
    name: environment_variables.nameDefault!,
    password: environment_variables.passwordDefault!,
    occupation: "ADM",
  };

  await createDefaultUser(userDefault);

  app.use("/users", routerUsers);

  app.listen(PORT, () => {
    console.log(`Running in port http://localhost:${PORT}`);
  });
};

main();
