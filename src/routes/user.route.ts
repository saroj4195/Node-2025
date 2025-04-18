// src/routes/user.routes.ts

import { Router } from "express";
import { getAllUsers, createUser } from "../controller/user.controller";

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);

export default router;
