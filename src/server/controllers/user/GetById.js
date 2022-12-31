import { User } from "../../db/models/User.js";

export const getById = async (req, res) => {
  return res.send("Visualizando um usuário");
};
