import { Router } from "express";
import { CategoryController } from "../controllers/category/index.js";

const CategoryRoutes = Router();

CategoryRoutes.get("/categories", CategoryController.getAll);

CategoryRoutes.get("/categories/:id", CategoryController.getById);

CategoryRoutes.post("/categories", CategoryController.create);

CategoryRoutes.put("/categories/:id", CategoryController.updateById);

CategoryRoutes.delete("/categories/:id", CategoryController.deleteById);

export { CategoryRoutes };
