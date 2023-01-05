import { ProgramProvider } from "../../db/providers/program/index.js";

export const getAll = async (req, res) => {
  return res.send("Listagem de todos os programas");
};
