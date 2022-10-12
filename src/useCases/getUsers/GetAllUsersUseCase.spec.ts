import "reflect-metadata";
import { ICreateUserDTO } from "./../../repositories/IUsersRepository";
import { UsersRepositoryInMemory } from "./../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUsers/CreateUserUseCase";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let getAllUsersUseCase: GetAllUsersUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Get All Users", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    getAllUsersUseCase = new GetAllUsersUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to get all users", async () => {
    const user1: ICreateUserDTO = {
      firstName: "John",
      lastName: "Doe",
      email: "user@test.com",
      password: "1234",
    };

    const user2: ICreateUserDTO = {
      firstName: "Alam",
      lastName: "Doe",
      email: "user@email.com",
      password: "1234",
    };

    await createUserUseCase.execute(user1);
    await createUserUseCase.execute(user2);

    const result = await getAllUsersUseCase.execute();

    expect(result).toHaveLength(2);
  });
});
