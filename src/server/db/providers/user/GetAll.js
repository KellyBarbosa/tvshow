import { User } from "../../models/User.js";

export const getAll = async (req, res) => {
  return res.send("Listagem de todos os usuários");
};
