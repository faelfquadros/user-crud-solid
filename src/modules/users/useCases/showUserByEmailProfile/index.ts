import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ShowUserProfileByEmailController } from "./ShowUserProfileByEmailController";
import { ShowUserProfileByEmailUseCase } from "./ShowUserProfileByEmailUseCase";

const usersRepository = UsersRepository.getInstance();
const showUserProfileUseCase = new ShowUserProfileByEmailUseCase(
  usersRepository
);
const showUserProfileByEmailController = new ShowUserProfileByEmailController(
  showUserProfileUseCase
);

export { showUserProfileByEmailController };
