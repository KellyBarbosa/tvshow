import { Category } from "../../models/Category.js";
import { UserProvider } from "../user/index.js";
export const create = async (name, userId) => {
  try {    
    const user = await UserProvider.getById(userId).then(async (result)=> {
      if (result === null || result instanceof Error) {
        return new Error("Erro ao cadastrar registro.")
      } else {
        const [category, created] = await Category.findOrCreate({
          where: {
            name
          },
          defaults: {
            userId
          }
        })
        return created
      }
    })
  } catch (error) {
    return new Error("Erro ao cadastrar registro.")
  }
};
