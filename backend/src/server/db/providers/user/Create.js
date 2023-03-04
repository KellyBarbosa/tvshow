import { User } from "../../models/User.js";

export const create = async (login, password, isAdmin) => {
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        login,
      },
      defaults: {
        password,
        isAdmin,
        active: true,
      },
    });
    return created;
  } catch (error) {
    return new Error("Erro ao cadastrar registro.");
  }
};
