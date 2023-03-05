import { Router } from "express";
import { UserController } from "../controllers/user/index.js";
import { auth } from "../shared/middleware/Auth.js";

const router = Router();

router.get("/users", auth, UserController.getAll);

router.get("/users/:id", auth, UserController.getById);

router.post("/users", UserController.create);

router.put("/users/:id", auth, UserController.updateById);

router.delete("/users/:id", auth, UserController.deleteById);

router.post("/users/login", UserController.login);

export { router };
