import { inject, injectable } from "tsyringe";
import { AppError } from "../../AppError";
import {
  IUsersRepository,
  ICreateUserDTO,
} from "../../repositories/IUsersRepository";
import { User } from "src/entities/User";

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }
}

export { GetAllUsersUseCase };
