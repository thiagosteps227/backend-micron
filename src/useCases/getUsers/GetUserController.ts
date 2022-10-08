import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getUserUseCase = container.resolve(GetUserUseCase);

    await getUserUseCase.execute(id);

    return response.status(201).send();
  }
}

export { GetUserController };
