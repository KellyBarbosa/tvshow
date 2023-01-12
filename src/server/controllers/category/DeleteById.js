import { CategoryProvider } from "../../db/providers/category/index.js";

export const deleteById = async (req, res) => {
  const id = req.body.id;
  const result = await CategoryProvider.deleteById(id).catch((e) => {
    return res.status(500).json({
      errors: {
        message: e.message,
      },
    });
  });

  if (result) {
    return res.status(200).json({
      message: "Registro removido com sucesso.",
    });
  } else {
    return res.status(400).json({
      message: "Erro ao remover registro",
    });
  }
};
