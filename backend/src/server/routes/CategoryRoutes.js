import { Router } from "express";
import { CategoryController } from "../controllers/category/index.js";

const router = Router();

router.get("/categories", CategoryController.getAll);

router.get("/categories/:id", CategoryController.getById);

router.post("/categories", CategoryController.create);

router.put("/categories/:id", CategoryController.updateById);

router.delete("/categories/:id", CategoryController.deleteById);

export { router };
