import { User } from "./../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async update(data: ICreateUserDTO): Promise<User> {
    const user = this.users.find((user) => user.id === data.id);
    const updatedUser = Object.assign(user, data);
    return updatedUser;
  }
  async findAll(): Promise<User[]> {
    return this.users;
  }

  async create({
    firstName,
    lastName,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      firstName,
      lastName,
      email,
      password,
    });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { UsersRepositoryInMemory };
