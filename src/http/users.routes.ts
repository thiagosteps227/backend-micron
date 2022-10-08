import { GetUserController } from "../useCases/getUsers/GetUserController";
import { Router } from "express";
import { CreateUserController } from "src/useCases/createUsers/CreateUserController";
import { GetAllUsersController } from "src/useCases/getUsers/GetAllUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const getUserController = new GetUserController();

const getAllUsersController = new GetAllUsersController();

usersRoutes.post("/new", createUserController.handle);
usersRoutes.get("/:id", getUserController.handle);
usersRoutes.get("/", getAllUsersController.handle);

export { usersRoutes };
