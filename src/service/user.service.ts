import { UserRepository } from "../repository/user.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  getUsers() {
    return this.userRepository.fetchUsers();
  }
}
