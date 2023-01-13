import { CategoryProvider } from "../../db/providers/category/index.js";

export const getById = async (req, res) => {
  const id = req.params.id;

  if(id <= 0 || !Number.isInteger(Number(id))){
    return res.status(400).json({
      errors: {
        message: "Erro ao consultar registro, problema no parâmetro informado."
      }
    })
  }

  const result = await CategoryProvider.getById(id).catch((e) => {
    return res.status(500).json({
      errors: {
        message: e.message,
      },
    });
  });
  if (result === null) {
    return res.status(400).json({
      message: "Registro não localizado.",
    });
  } else {
    return res.status(200).json(result);
  }
};
