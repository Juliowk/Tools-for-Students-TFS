import { Router } from "express";

import { AuthMiddleware } from "../middlewares/Auth.js";

import { LoginRepository } from "../repositorys/Users/Login/repository.js";
import { LoginController } from "../controllers/Users/Login/controler.js";

import { GetRepository } from "../repositorys/Users/Get/repository.js";
import { GetController } from "../controllers/Users/Get/controler.js";

import { CreateRepository } from "../repositorys/Users/Create/repository.js";
import { CreateController } from "../controllers/Users/Create/controller.js";

import { DeleteRepository } from "../repositorys/Users/Delete/repository.js";
import { DeleteController } from "../controllers/Users/Delete/controller.js";

import { UpdateRepository } from "../repositorys/Users/Update/repository.js";
import { UpdateController } from "../controllers/Users/Update/controller.js";

const routerUsers = Router();

routerUsers.post("/login", async (req, res) => {
  const repository = new LoginRepository();
  const controller = new LoginController(repository);
  const { statusCode, body } = await controller.handle(req);
  res.status(statusCode).json(body);
});

routerUsers.post("/create", AuthMiddleware, async (req, res) => {
  const repository = new CreateRepository();
  const controller = new CreateController(repository);
  const { statusCode, body } = await controller.handle(req);
  res.status(statusCode).json(body);
});

routerUsers.delete("/delete/:id", AuthMiddleware, async (req, res) => {
  const repository = new DeleteRepository();
  const controller = new DeleteController(repository);
  const { statusCode, body } = await controller.handle(req);
  res.status(statusCode).json(body);
});

routerUsers.patch("/update/:id", AuthMiddleware, async (req, res) => {
  const repository = new UpdateRepository();
  const controller = new UpdateController(repository);
  const { statusCode, body } = await controller.handle(req);
  res.status(statusCode).json(body);
});

routerUsers.get("/", AuthMiddleware, async (req, res) => {
  const repository = new GetRepository();
  const controller = new GetController(repository);
  const { statusCode, body } = await controller.handle();
  res.status(statusCode).json(body);
});

export default routerUsers;
