import { Category } from "../../models/Category.js";

export const create = async (name, userId) => {
  try {
          const [category, created] = await Category.findOrCreate({
            where: {
              name,
            },
            defaults: {
              userId,
            },
          });
          return created;
  } catch (error) {
    return new Error("Erro ao cadastrar registro.");
  }
};
