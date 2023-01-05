import { Router } from "express";
import { ProgramController } from "../controllers/program/index.js";

const ProgramRoutes = Router();

ProgramRoutes.get("/programs", ProgramController.getAll);

ProgramRoutes.get("/programs/:id", ProgramController.getById);

ProgramRoutes.post("/programs", ProgramController.create);

ProgramRoutes.put("/programs/:id", ProgramController.updateById);

ProgramRoutes.delete("/programs/:id", ProgramController.deleteById);

export { ProgramRoutes };
