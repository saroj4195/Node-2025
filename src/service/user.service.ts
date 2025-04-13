import { UserRepository } from "../repository/user.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUsers() {
    return await this.userRepository.fetchUsers();
  }

  async addUser(userData: { name: string; email: string }) {
    return await this.userRepository.createUser(userData);
  }
}
