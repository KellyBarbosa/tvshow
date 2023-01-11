import { CategoryProvider } from "../../db/providers/category/index.js";

export const getById = async (req, res) => {
  const id = req.body.id
  const result = await CategoryProvider.getById(id).catch((e) => {
    return res.status(500).json({
      errors:{
        default: e.message
      }
    })
  })
  if(result === null){
    return res.status(400).json({
      message: "Registro não localizado."
    })
  }else {
    return res.status(200).json(result)
  }
};
