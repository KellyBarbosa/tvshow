import { User } from "../../db/models/User.js";

export const getAll = async (req, res) => {
  return res.send("Listagem de todos os usuários");
};
