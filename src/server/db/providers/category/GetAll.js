import { Category } from "../../db/models/Category.js";

export const getAll = async () => {
  try {
    const categories = await Category.findAll({
      attributes: ["name"]
    })
    return categories
  } catch (error) {
    return new Error("Erro ao consultar registros.")
  }

};
