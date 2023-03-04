import { User } from "../../models/User.js";

export const deleteById = async (id) => {
  try {
    const deleted = User.update(
      { active: false },
      {
        where: {
          id,
          active: true,
        },
      }
    ).then((result) => result[0]);
    return deleted;
  } catch (error) {
    return new Error("Erro ao remover registro.");
  }
};
