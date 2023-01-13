import { CategoryProvider } from "../../db/providers/category/index.js";

export const create = async (req, res) => {
  const name = req.body.name;
  const userId = req.body.userId;

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
  } else {
    const result = await CategoryProvider.create(name, userId).catch((e) => {
      return res.status(500).json({
        errors: {
          message: e.message,
        },
      });
    });

    console.log("Result: ", result);
    if (!result) {
      return res.status(400).json({
        errors: {
          message:
            "Erro ao cadastrar registro, pois já existe uma categoria com o mesmo nome ou o usuário não foi encontrado.",
        },
      });
    } else {
      return res.status(201).json({
        message: "Cadastro realizado com sucesso.",
      });
    }
  }
};
