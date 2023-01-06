import { Program } from "../../models/Program.js";

export const create = async (title, description, categoryId) => {
  const [program, created] = await Program.findOrCreate({
    where: {
      title,
    },
    defaults: {
      description,
      score: 0,
      categoryId: 
    },
  });
  return created;
};
