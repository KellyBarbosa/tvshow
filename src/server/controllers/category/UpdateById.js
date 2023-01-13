import { CategoryProvider } from "../../db/providers/category/index.js";
import { UserProvider } from "../../db/providers/user/index.js";

export const updateById = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const userId = req.body.userId;

  if (id <= 0 || !Number.isInteger(Number(id))) {
    return res.status(400).json({
      errors: {
        message: "Erro ao atualizar registro, problema no parâmetro informado.",
      },
    });
  } 
  if (
    name === undefined ||
    name.trim().length === 0 ||
    userId <= 0 || !Number.isInteger(Number(userId))
  ) {
    return res.status(400).json({
      errors: {
        message: "Erro ao atualizar registro, problema nos dados enviados.",
      },
    });
  } 

  const user = await UserProvider.getById(userId).catch((e) => {
    return res.status(500).json({
      errors: {
        message: e.message,
      },
    });
  });
  if (user === null) {
    return res.status(400).json({
      message: "Erro ao atualizar registro, pois o usuário a ser vinculado não foi encontrado.",
    });
  }

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
      message: "Erro ao atualizar registro, registro não localizado.",
    });
  }
};
