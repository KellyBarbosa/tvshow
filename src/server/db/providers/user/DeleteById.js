import { User } from "../../models/User.js";

export const deleteById = async (id) => {
  try {
    const deleted = User.destroy({
      where: {
        id,
      },
    })
      .then((result) => result)
    return deleted;
  } catch (error) {
    return new Error ("Erro ao remover registro.")
  }
 
};
