import { Program } from "../../models/Program.js";

export const create = async (title, description) => {
  const [program, created] = await Program.findOrCreate({
    where: {
      title,
    },
    defaults: {
      description,
      score: 0,
      categoryId: 1,
    },
  });
  return created;
};
