import { Router } from "express";
import { UserRoutes } from "./UserRoutes.js";
import { CategoryRoutes } from "./CategoryRoutes.js";
import { ProgramRoutes } from "./ProgramRoutes.js";

const router = Router();

router.get("/", (_, res) => {
  res.send("Página inicial");
});

export { router, ProgramRoutes, UserRoutes, CategoryRoutes };
