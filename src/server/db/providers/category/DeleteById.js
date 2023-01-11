import { Category } from "../../db/models/Category.js";

export const deleteById = async (id) => {
  try{
    const deleted = await Category.destroy({
      where:{
        id
      }
    }).then((result) => result)
    return deleted
  }catch(error){
    return new Error ("Erro ao remover registro.")
  }
};
