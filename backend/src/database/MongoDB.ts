import { MongoClient, Db } from "mongodb";
import environment_variables from "../helpers/environmentVariables.js";

export const MongoConnect = {
  client: undefined as unknown as MongoClient,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    try {
      const url = environment_variables.URL_MONGO_DATABASE;

      if (!url) throw new Error("Database url isn't definded!");

      const client = new MongoClient(url!);
      await client.connect();

      const databaseName = environment_variables.DATABASE_NAME;

      if (!databaseName) throw new Error("Database name isn't definded!");

      const db = client.db(databaseName);

      try {
        await db.command({ ping: 1 });
        console.log("Connected database!");
      } catch (error) {
        console.log(`"Database connection failed during ping: ${error}`);
        throw new Error("Unable to ping the database. It might be down.");
      }

      this.client = client;
      this.db = db;
    } catch (error) {
      if (this.client) {
        await this.client.close();
      }

      if (error instanceof Error) {
        console.error("Failed to connect to the database:", error.message);
      }
    }
  },
};
