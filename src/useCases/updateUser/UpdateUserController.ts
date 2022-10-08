import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { firstName, lastName, email, password } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const updatedUser = await updateUserUseCase.execute({
      id,
      firstName,
      lastName,
      email,
      password,
    });

    return response.status(201).send(updatedUser);
  }
}

export { UpdateUserController };
