import { Request, Response } from "express";
import { UserService } from "../service/user.service";

const userService = new UserService();

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.getUsers();
  res.json(users);
};
