import "reflect-metadata";

import { ICreateUserDTO } from "./../../repositories/IUsersRepository";
import { AppError } from "./../../AppError";
import { UsersRepositoryInMemory } from "./../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUsers/CreateUserUseCase";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let getAllUsersUseCase: GetAllUsersUseCase;

describe("Get All Users", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    getAllUsersUseCase = new GetAllUsersUseCase(usersRepositoryInMemory);
  });

  it("should be able to get all users", async () => {
    const user: ICreateUserDTO = {
      firstName: "John",
      lastName: "Doe",
      email: "user@test.com",
      password: "1234",
    };

    const createSpy = jest.spyOn(usersRepositoryInMemory, "create");

    await createUserUseCase.execute(user);

    expect(createSpy).toHaveBeenCalled();
  });
});
