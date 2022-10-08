import { GetUserController } from "../useCases/getUsers/GetUserController";
import { Router } from "express";
import { CreateUserController } from "src/useCases/createUsers/CreateUserController";
import { GetAllUsersController } from "src/useCases/getUsers/GetAllUsersController";
import { UpdateUserController } from "src/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const getUserController = new GetUserController();

const getAllUsersController = new GetAllUsersController();

const updateUserController = new UpdateUserController();

usersRoutes.post("/new", createUserController.handle);
usersRoutes.get("/:id", getUserController.handle);
usersRoutes.get("/", getAllUsersController.handle);
usersRoutes.put("/:id", updateUserController.handle);

export { usersRoutes };
