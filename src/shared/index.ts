import { container } from "tsyringe";

import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/implementations/UserRepository";
import { IUsersTokensRepository } from "src/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "src/repositories/implementations/UsersTokensRepository";
import { IDateProvider } from "./providers/DateProvider/IDateProvider";
import { DayjsDateProvider } from "./providers/DateProvider/implementations/DayjsDateProvider";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
