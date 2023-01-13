import { CategoryProvider } from "../../db/providers/category/index.js";
import { ProgramProvider } from "../../db/providers/program/index.js";
import { UserProvider } from "../../db/providers/user/index.js";

export const create = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const categoryId = req.body.categoryId;
  const userId = req.body.userId;

  if (
    name === undefined ||
    name.trim().length === 0 ||
    description === undefined ||
    description.trim().length === 0 ||
    categoryId <= 0 ||
    !Number.isInteger(Number(categoryId)) ||
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
      message: "Erro ao cadastrar registro, pois o usuário a ser vinculado não foi encontrado.",
    });
  }

  const category = await CategoryProvider.getById(categoryId).catch((e) => {
    return res.status(500).json({
      errors: {
        message: e.message,
      },
    });
  });
  if (category === null) {
    return res.status(400).json({
      message: "Erro ao cadastrar registro, pois a categoria a ser vinculada não foi encontrada.",
    });
  }

  const result = await ProgramProvider.create(name, description, categoryId, userId);
  if (result) {
    return res.status(201).json({
      message: "Erro ao cadastrar registro, pois já existe um programa com o mesmo nome.",

    });
  } else {
    return res.status(500).json({
      message: "Erro ao cadastrar o programa.",
    });
  }
};
