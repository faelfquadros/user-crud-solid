import { Request, Response } from "express";

import { ShowUserProfileByEmailUseCase } from "./ShowUserProfileByEmailUseCase";

class ShowUserProfileByEmailController {
  constructor(
    private showUserProfileByEmailUseCase: ShowUserProfileByEmailUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { email } = request.params;

    const user = this.showUserProfileByEmailUseCase.execute({ email });

    return response.status(200).json(user);
  }
}

export { ShowUserProfileByEmailController };
