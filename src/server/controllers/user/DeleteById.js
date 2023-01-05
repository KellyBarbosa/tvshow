import { UserProvider } from "../../db/providers/user/index.js";

export const deleteById = async (req, res) => {
  return res.send("Removendo um usuário");
};
