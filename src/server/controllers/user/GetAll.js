import { UserProvider } from "../../db/providers/user/index.js";

export const getAll = async (req, res) => {
  return res.send("Listagem de todos os usuários");
};
