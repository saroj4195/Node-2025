// src/controller/user.controller.ts

import { Request, Response, NextFunction } from "express";
import { UserService } from "../service/user.service";

const userService = new UserService();

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).json({ message: "Name and Email are required" });
      return;
    }

    const newUser = await userService.addUser({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
