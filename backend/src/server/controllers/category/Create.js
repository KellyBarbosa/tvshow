import { CategoryProvider } from "../../db/providers/category/index.js";
import { UserProvider } from "../../db/providers/user/index.js";

export const create = async (req, res) => {
  const { name, userId } = req.body;

  if (
    name === undefined ||
    name.trim().length === 0 ||
    userId <= 0 ||
    !Number.isInteger(Number(userId))
  ) {
    return res.status(400).json({
      errors: {
        message: "Erro ao cadastrar registro, problema nos dados enviados.",
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
      message:
        "Erro ao cadastrar registro, pois o usuário a ser vinculado não foi encontrado.",
    });
  }

  const result = await CategoryProvider.create(name, userId).catch((e) => {
    return res.status(500).json({
      errors: {
        message: e.message,
      },
    });
  });

  if (!result) {
    return res.status(400).json({
      errors: {
        message:
          "Erro ao cadastrar registro, pois já existe uma categoria com o mesmo nome.",
      },
    });
  } else {
    return res.status(201).json({
      message: "Cadastro realizado com sucesso.",
    });
  }
};
