import { inject, injectable } from "tsyringe";
import { AppError } from "../../AppError";
import {
  IUsersRepository,
  ICreateUserDTO,
  IUserResponseDTO,
} from "../../repositories/IUsersRepository";
import { UserMap } from "./../../mapper/UserMap";

@injectable()
class GetUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<IUserResponseDTO> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User does not exist!");
    }

    return UserMap.toDTO(user);
  }
}

export { GetUserUseCase, ICreateUserDTO };
