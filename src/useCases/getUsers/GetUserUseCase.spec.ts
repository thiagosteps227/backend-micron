import "reflect-metadata";
import { ICreateUserDTO } from "./../../repositories/IUsersRepository";
import { UsersRepositoryInMemory } from "./../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUsers/CreateUserUseCase";
import { GetUserUseCase } from "./GetUserUseCase";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
import { AppError } from "./../../AppError";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let getUserUseCase: GetUserUseCase;
let createUserUseCase: CreateUserUseCase;
let getAllUsersUseCase: GetAllUsersUseCase;

describe("Get User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    getUserUseCase = new GetUserUseCase(usersRepositoryInMemory);
    getAllUsersUseCase = new GetAllUsersUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to get a user", async () => {
    const user: ICreateUserDTO = {
      firstName: "John",
      lastName: "Doe",
      email: "user@test.com",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const users = await getAllUsersUseCase.execute();

    const id = users[0].id;

    const result = await getUserUseCase.execute(id);

    expect(result).toHaveProperty("id");
  });

  it("should not be able to get an user", async () => {
    await expect(
      getUserUseCase.execute("da083022-87d0-44e3-bb1e-6b050324aa3a")
    ).rejects.toEqual(new AppError("User does not exist!"));
  });
});
