import { User } from "../../models/User.js";

export const updateById = async (login, isAdmin, id) => {
  try {
    const updated = await User.update(
      {
        login,
        isAdmin,
      },
      {
        where: {
          id,
          active: true,
        },
      }
    ).then((result) => result[0]);
    return updated;
  } catch (error) {
    return new Error("Erro ao atualizar registro.");
  }
};
