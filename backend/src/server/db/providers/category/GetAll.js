import { Category } from "../../models/Category.js";

export const getAll = async () => {
  try {
    const categories = await Category.findAll({
      where: {
        active: true,
      },
      attributes: ["name"],
    });
    return categories;
  } catch (error) {
    return new Error("Erro ao consultar registros.");
  }
};
