import { Program } from "../../models/Program.js";

export const create = async (name, description, categoryId, userId) => {
  const [program, created] = await Program.findOrCreate({
    where: {
      name,
    },
    defaults: {
      description,
      score: 0,
      categoryId,
      userId
    },
  });
  return created;
};
