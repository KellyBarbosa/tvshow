import express from "express";

import { router } from "./routes/index.js";

import { connection } from "./db/database.js";

const server = express();

server.use(express.json());
server.use(router);

connection
  .authenticate()
  .then(() => {
    console.log("Database connection made successfully!");
  })
  .catch((err) => {
    console.log("Erro: ", err);
  });

export { server };
