import { Router } from "express";
import { TvShowController } from "../controllers/index.js";

const router = Router();

router.get("/", (_, res) => {
  res.send("Página inicial");
});

router.get("/tvshows", TvShowController.getAll);

router.get("/tvshows/:id", TvShowController.getById);

router.post("/tvshows", TvShowController.create);

router.put("/tvshows/:id", TvShowController.updateById);

router.delete("/tvshows/:id", TvShowController.deleteById);

export { router };
