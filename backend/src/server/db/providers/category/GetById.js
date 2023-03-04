import { Category } from "../../models/Category.js";

export const getById = async (id) => {
  try {
    const category = await Category.findOne({
      where: { id, active: true },
    });
    return category;
  } catch (error) {
    return new Error("Erro ao consultar registro.");
  }
};
