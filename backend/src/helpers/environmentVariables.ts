import dotenv from "dotenv";
dotenv.config();

const environment_variables = {
  PORT: process.env.PORT,
  URL_MONGO_DATABASE: process.env.URL_MONGO_DATABASE,
  DATABASE_NAME: process.env.DATABASE_NAME,
  nameDefault: process.env.NAMEDEFAULT,
  passwordDefault: process.env.PASSWORDDEFAULT,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default environment_variables;
