import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
}

class ShowUserProfileByEmailUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email }: IRequest): User {
    const user = this.usersRepository.findByEmail(email);

    return user;
  }
}

export { ShowUserProfileByEmailUseCase };
