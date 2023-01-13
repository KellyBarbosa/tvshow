import { Program } from "../../models/Program.js";

export const updateById = async (id, name, description, score, categoryId, userId) => {
  try {      
    const updated = await Program.update(
      {
        name,
        description,
        score,
        categoryId,
        userId,
      },
      {
        where: {
          id,
        },
      }
    ).then((result) => result);
    return updated;
} catch (error) {
return new Error("Erro ao atualizar registro.");
}
};
