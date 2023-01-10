import { User } from "../../models/User.js";

export const getById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    return new Error("Erro ao consultar registro.")
  }

};
