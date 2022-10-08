import { container } from "tsyringe";

import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/implementations/UserRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
