import { inject, injectable } from "tsyringe";
import { AppError } from "../../AppError";
import {
  IUsersRepository,
  ICreateUserDTO,
  IUserResponseDTO,
} from "../../repositories/IUsersRepository";
import { User } from "src/entities/User";
import { UserMap } from "src/mapper/UserMap";

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<IUserResponseDTO[]> {
    const users = await this.usersRepository.findAll();

    let profiles = [];

    await Promise.all(
      users.map((user) => {
        profiles.push(UserMap.toDTO(user));
        console.log(profiles);
      })
    );

    return profiles;
  }
}

export { GetAllUsersUseCase };
