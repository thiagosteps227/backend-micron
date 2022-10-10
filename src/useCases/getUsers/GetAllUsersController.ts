import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

class GetAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);

    const users = await getAllUsersUseCase.execute();
    console.log("controller", users);

    return response.status(200).send(users);
  }
}

export { GetAllUsersController };
