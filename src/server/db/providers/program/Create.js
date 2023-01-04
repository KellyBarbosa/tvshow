import { Program } from "../../models/Program.js";

export const create = async (title, description) => {
  console.log("AD");
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
  console.log("Program: ", program);
  console.log("Created: ", created);
  return created;
};
