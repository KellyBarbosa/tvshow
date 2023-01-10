import { CategoryProvider } from "../../db/providers/category/index.js";

export const create = async (req, res) => {
  const name = req.body.name;
  const userId = req.body.userId;

  const result = await CategoryProvider.create(name, userId).catch((e) => {
    return res.status(500).json({
      errors: {
        default: e.message
      }
    })
  })

  if(!result){
    return res.status(400).json({
      errors: {
        default: "Erro ao cadastrar registro."
      }
    })
  }else {
    return res.status(201).json({
      message: "Cadastro realizado com sucesso.",
    });
  }
};
