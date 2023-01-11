import { Category } from "../../db/models/Category.js";
import { UserProvider } from "../user/index.js";

export const updateById = async (name, userId, id) => {
  try {
    await UserProvider.getById(userId).then(async (result)=> {
      if (result === null || result instanceof Error) {
        return new Error("Erro ao atualizar registro.")
      } else {
        const updated = await Category.update(
          {
            name,
            userId,
          },
          {
            where: {
              id,
            },
          }
        )
          .then((result) => result)
        return updated;}
    }).catch(() => new Error("Erro ao atualizar registro."))
  } catch (error) {
    return new Error("Erro ao atualizar registro.")
  }
};
