import { instanceToInstance } from "class-transformer";
import { IUserResponseDTO } from "../repositories/IUsersRepository";
import { User } from "../entities/User";

//class designed to map the user entity to the user response DTO without exposing the password
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
