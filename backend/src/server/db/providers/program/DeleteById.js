import { Program } from "../../models/Program.js";

export const deleteById = async (id) => {
  try {
    const deleted = await Program.destroy({
      where: {
        id,
      },
    }).then((result) => result);
    return deleted;
  } catch (error) {
    return new Error("Erro ao remover registro.");
  }
};
