import { CategoryProvider } from "../../db/providers/category/index.js";

export const updateById = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const userId = req.body.userId;

  const result = await CategoryProvider.updateById(name, userId, id).catch(
    (e) => {
      return res.status(500).json({
        errors: {
          message: e.message,
        },
      });
    }
  );
  if (result) {
    return res.status(200).json({
      message: "Registro atualizado com sucesso.",
    });
  } else {
    return res.status(400).json({
      message: "Erro ao atualizar registro.",
    });
  }
};
