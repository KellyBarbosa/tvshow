import { Router } from "express";
import { UserController } from "../controllers/user/index.js";

const UserRoutes = Router();

UserRoutes.get("/users", UserController.getAll);

UserRoutes.get("/users/:id", UserController.getById);

UserRoutes.post("/users", UserController.create);

UserRoutes.put("/users/:id", UserController.updateById);

UserRoutes.delete("/users/:id", UserController.deleteById);

export { UserRoutes };
