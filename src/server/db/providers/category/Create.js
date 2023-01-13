import { Category } from "../../models/Category.js";
import { UserProvider } from "../user/index.js";

export const create = async (name, userId) => {
  try {
    const result = await UserProvider.getById(userId)
      .then(async (result) => {
        if (result === null || result instanceof Error) {
          return new Error("Erro ao cadastrar registro.");
        } else {
          const [category, created] = await Category.findOrCreate({
            where: {
              name,
            },
            defaults: {
              userId,
            },
          });
          console.log("Created: ", created);
          return created;
        }
      })
      .catch(() => {
        return new Error("Erro ao cadastrar registro.");
      });
    return result;
  } catch (error) {
    return new Error("Erro ao cadastrar registro.");
  }
};
