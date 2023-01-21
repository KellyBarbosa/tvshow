import express from "express";

import { connection } from "./db/database.js";

import {
  router,
  UserRoutes,
  CategoryRoutes,
  ProgramRoutes,
} from "./routes/index.js";

const server = express();

server.use(express.json());
server.use(router);
server.use(UserRoutes);
server.use(CategoryRoutes);
server.use(ProgramRoutes);

connection
  .authenticate()
  .then(() => {
    connection.sync();
    console.log("Database connection made successfully!");
  })
  .catch((err) => {
    console.log("Erro: ", err);
  });

export { server };
