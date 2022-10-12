import "reflect-metadata";
import { ICreateUserDTO } from "./../../repositories/IUsersRepository";
import { UsersRepositoryInMemory } from "./../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUsers/CreateUserUseCase";

import { AppError } from "./../../AppError";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { GetAllUsersUseCase } from "../getUsers/GetAllUsersUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let updateUserUseCase: UpdateUserUseCase;
let createUserUseCase: CreateUserUseCase;
let getAllUsersUseCase: GetAllUsersUseCase;

describe("Update User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    updateUserUseCase = new UpdateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    getAllUsersUseCase = new GetAllUsersUseCase(usersRepositoryInMemory);
  });

  it("should be able to update a user", async () => {
    const user: ICreateUserDTO = {
      firstName: "John",
      lastName: "Doe",
      email: "user@test.com",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const users = await getAllUsersUseCase.execute();

    const id = users[0].id;

    const result = await updateUserUseCase.execute({
      id,
      firstName: "Adam",
      lastName: "Doe",
      email: "user@gmail.com",
      password: "1234",
    });

    expect(result.firstName).toEqual("Adam");
  });
});
