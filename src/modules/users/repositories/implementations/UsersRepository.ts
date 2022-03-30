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
    const user = this.users.find((u) => u.email === email);

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.findById(receivedUser.id);

    if (!user) {
      throw new Error("User not found");
    }

    user.admin = true;

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
