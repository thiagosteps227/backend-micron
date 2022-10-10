import { instanceToInstance } from "class-transformer";
import { IUserResponseDTO } from "../repositories/IUsersRepository";
import { User } from "../entities/User";

class UserMap {
  static toDTO({ id, firstName, lastName, email }: User): IUserResponseDTO {
    const user = instanceToInstance({
      id,
      firstName,
      lastName,
      email,
    });
    return user;
  }
}

export { UserMap };
