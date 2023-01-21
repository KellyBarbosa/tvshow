import { User } from "../../models/User.js";

export const updateById = async (login, password, isAdmin, id) => {
  try {
    const updated = await User.update(
      {
        login,
        password,
        isAdmin,
      },
      {
        where: {
          id,
        },
      }
    ).then((result) => result[0]);
    return updated;
  } catch (error) {
    return new Error("Erro ao atualizar registro.");
  }
};
