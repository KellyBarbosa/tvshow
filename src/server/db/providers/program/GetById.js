import { Program } from "../../models/Program.js";

export const getById = async (id) => {
  try {
    const program = await Program.findByPk(id);
    return program;
  } catch (error) {
    return new Error("Erro ao consultar registro.");
  }
};
