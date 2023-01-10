import { Router } from "express";
import { ProgramController } from "../controllers/program/index.js";

const router = Router();

router.get("/programs", ProgramController.getAll);

router.get("/programs/:id", ProgramController.getById);

router.post("/programs", ProgramController.create);

router.put("/programs/:id", ProgramController.updateById);

router.delete("/programs/:id", ProgramController.deleteById);

export { router };
