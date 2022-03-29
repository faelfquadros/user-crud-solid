import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ShowUserProfileByIdController } from "./ShowUserProfileByIdController";
import { ShowUserProfileByIdUseCase } from "./ShowUserProfileByIdUseCase";

const usersRepository = UsersRepository.getInstance();
const showUserProfileUseCase = new ShowUserProfileByIdUseCase(usersRepository);
const showUserProfileByIdController = new ShowUserProfileByIdController(
  showUserProfileUseCase
);

export { showUserProfileByIdController };
