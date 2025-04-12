import { Router } from "express";
import { getAllUsers } from "../controller/user.controller";

const router = Router();

router.get("/", getAllUsers);

export default router;
