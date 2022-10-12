import "reflect-metadata";

import { ICreateUserDTO } from "./../../repositories/IUsersRepository";
import { AppError } from "./../../AppError";
import { UsersRepositoryInMemory } from "./../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUsers/CreateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Create User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to create an user", async () => {
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

  it("should not be able to create an existent user", async () => {
    const user: ICreateUserDTO = {
      firstName: "John",
      lastName: "Doe",
      email: "user@test.com",
      password: "1234",
    };

    await createUserUseCase.execute(user);
    await expect(
      createUserUseCase.execute({
        firstName: "John",
        lastName: "Doe",
        email: "user@test.com",
        password: "1234",
      })
    ).rejects.toEqual(new AppError("User Already Exists!"));
  });
});
