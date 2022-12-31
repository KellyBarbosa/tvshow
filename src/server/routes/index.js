import { Router } from "express";
import { CategoryController } from "../controllers/category/index.js";
import { UserController } from "../controllers/user/index.js";
import { ProgramController } from "../controllers/program/index.js";

const router = Router();

router.get("/", (_, res) => {
  res.send("Página inicial");
});

// Programs

router.get("/programs", ProgramController.getAll);

router.get("/programs/:id", ProgramController.getById);

router.post("/programs", ProgramController.create);

router.put("/programs/:id", ProgramController.updateById);

router.delete("/programs/:id", ProgramController.deleteById);

// Categories

router.get("/categories", CategoryController.getAll);

router.get("/categories/:id", CategoryController.getById);

router.post("/categories", CategoryController.create);

router.put("/categories/:id", CategoryController.updateById);

router.delete("/categories/:id", CategoryController.deleteById);

// Users

router.get("/users", UserController.getAll);

router.get("/users/:id", UserController.getById);

router.post("/users", UserController.create);

router.put("/users/:id", UserController.updateById);

router.delete("/users/:id", UserController.deleteById);

export { router };
