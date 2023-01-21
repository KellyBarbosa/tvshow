import { Program } from "../../models/Program.js";

export const getAll = async () => {
  try {
    const programs = await Program.findAll({
      attributes: ["name", "description", "score"],
    });
    return programs;
  } catch (error) {
    return new Error("Erro ao consultar registros.");
  }
};
