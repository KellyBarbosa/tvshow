import { User } from "../../db/models/User.js";

export const deleteById = async (req, res) => {
  return res.send("Removendo um usuário");
};
