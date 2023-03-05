import { Router } from "express";
import { UserController } from "../controllers/user/index.js";

const router = Router();

router.get("/users", UserController.getAll);

router.get("/users/:id", UserController.getById);

router.post("/users", UserController.create);

router.put("/users/:id", UserController.updateById);

router.delete("/users/:id", UserController.deleteById);

router.post("/users/login", UserController.login);

export { router };
