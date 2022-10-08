import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { AppError } from "../../AppError";
import {
  IUsersRepository,
  ICreateUserDTO,
} from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    firstName,
    lastName,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User Already Exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase, ICreateUserDTO };
