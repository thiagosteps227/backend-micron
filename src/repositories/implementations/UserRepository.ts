import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

import { User } from "../../entities/User";
import { Repository } from "typeorm/repository/Repository";
import { getRepository } from "typeorm/globals";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    firstName,
    lastName,
    email,
    password,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      firstName,
      lastName,
      email,
      password,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };
