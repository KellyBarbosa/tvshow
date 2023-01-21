import { Router } from "express";
import { router as UserRoutes } from "./UserRoutes.js";
import { router as CategoryRoutes } from "./CategoryRoutes.js";
import { router as ProgramRoutes } from "./ProgramRoutes.js";

const router = Router();

router.get("/", (_, res) => {
  res.send("Página inicial");
});

export { router, ProgramRoutes, UserRoutes, CategoryRoutes };
