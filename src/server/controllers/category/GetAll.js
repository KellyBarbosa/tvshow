import { CategoryProvider } from "../../db/providers/category/index.js";

export const getAll = async (req, res) => {
  return res.send("Listagem de todos os programas");
};
