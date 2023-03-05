import { User } from "../../models/User.js";

export const getByLogin = async (login) => {
  try {
    const user = await User.findOne({
      where: { login: login, active: true },
      attributes: ["login", "password"],
    });
    if (user === null) {
      return user;
    }
    return user.dataValues;
  } catch (error) {
    return new Error("Erro ao consultar registro.");
  }
};
