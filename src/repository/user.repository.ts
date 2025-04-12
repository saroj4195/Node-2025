export class UserRepository {
    private users = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" }
    ];
  
    fetchUsers() {
      return this.users;
    }
  }
  