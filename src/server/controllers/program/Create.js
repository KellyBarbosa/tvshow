import { ProgramProvider } from "../../db/providers/program/index.js";

export const create = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const categoryId = req.body.categoryId;
  //console.log("Title: ", title, " - Description: ", description);
  const result = await ProgramProvider.create(title, description, categoryId);
  //console.log("Result: ", result);
  if (result) {
    return res.status(201).json({
      message: "Programa cadastrado com sucesso.",
    });
  } else {
    return res.status(500).json({
      message: "Erro ao cadastrar o programa.",
    });
  }
};
