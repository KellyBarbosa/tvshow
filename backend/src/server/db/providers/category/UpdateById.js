import { Category } from "../../models/Category.js";

export const updateById = async (name, userId, id) => {
  try {
    const updated = await Category.update(
      {
        name,
        userId,
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
