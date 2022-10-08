import { inject, injectable } from "tsyringe";
import { AppError } from "../../AppError";
import {
  IUsersRepository,
  ICreateUserDTO,
} from "../../repositories/IUsersRepository";
import { User } from "src/entities/User";

@injectable()
class GetUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User does not exist!");
    }

    return user;
  }
}

export { GetUserUseCase, ICreateUserDTO };
