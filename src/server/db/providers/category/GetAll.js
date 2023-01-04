import { Category } from "../../db/models/Category.js";

export const getAll = async (req, res) => {
  return res.send("Listagem de todos os programas");
};
