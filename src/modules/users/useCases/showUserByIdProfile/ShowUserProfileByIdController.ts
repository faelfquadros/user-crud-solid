import { Request, Response } from "express";

import { ShowUserProfileByIdUseCase } from "./ShowUserProfileByIdUseCase";

class ShowUserProfileByIdController {
  constructor(private showUserProfileByIdUseCase: ShowUserProfileByIdUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = this.showUserProfileByIdUseCase.execute({ user_id });

    return response.status(200).json(user);
  }
}

export { ShowUserProfileByIdController };
