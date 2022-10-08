import { User } from "../entities/User";

interface ICreateUserDTO {
  id?: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

interface IUserResponseDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findAll(): Promise<User[]>;
  update(data: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO, IUserResponseDTO };
