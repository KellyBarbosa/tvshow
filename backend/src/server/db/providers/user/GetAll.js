import { User } from "../../models/User.js";

export const getAll = async () => {
  try {
    const users = await User.findAll({
      where: {
        active: true,
      },
      attributes: ["login", "isAdmin"],
    });
    return users;
  } catch (error) {
    return new Error("Erro ao consultar registros.");
  }
};
