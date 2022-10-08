import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { AppError } from "../../AppError";
import {
  IUsersRepository,
  ICreateUserDTO,
} from "../../repositories/IUsersRepository";
import { User } from "src/entities/User";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    firstName,
    lastName,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User does not exist!");
    }

    const passwordHash = await hash(password, 8);

    const updatedUser = await this.usersRepository.update({
      id,
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    return updatedUser;
  }
}

export { UpdateUserUseCase };
