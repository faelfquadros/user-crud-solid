import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ email, name }: ICreateUserDTO): User {
    const newUser = new User();

    Object.assign(newUser, {
      email,
      name,
      admin: false,
      created_at: new Date(),
    });

    this.users.push(newUser);

    return newUser;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((u) => u.id === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
