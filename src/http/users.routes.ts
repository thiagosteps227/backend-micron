import { GetUserController } from "../useCases/getUsers/GetUserController";
import { Router } from "express";
import { CreateUserController } from "src/useCases/createUsers/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const getUserController = new GetUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", getUserController.handle);

export { usersRoutes };
