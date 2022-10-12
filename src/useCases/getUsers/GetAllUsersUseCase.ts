import { inject, injectable } from "tsyringe";
import {
  IUsersRepository,
  IUserResponseDTO,
} from "../../repositories/IUsersRepository";
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
