import { Program } from "../../models/Program.js";

export const getById = async (id) => {
  try {
    const program = await Program.findOne({
      where: { id, active: true },
      attributes: ["name", "description", "score", "categoryId", "userId"],
    });
    return program;
  } catch (error) {
    return new Error("Erro ao consultar registro.");
  }
};
