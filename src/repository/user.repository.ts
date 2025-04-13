import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const UserModel = mongoose.model("User", userSchema);

export class UserRepository {
  async fetchUsers() {
    return await UserModel.find();
  }

  async createUser(userData: { name: string; email: string }) {
    const user = new UserModel(userData);
    return await user.save();
  }
}
