import { UserProvider } from "../../db/providers/user/index.js";

export const deleteById = async (req, res) => {
  const id = req.body.login;
  const result = UserProvider.deleteById(id);
  if (result) {
    return res.status(200).json({
      message: "Registro removido com sucesso.",
    });
  } else {
    return res.status(400).json({
      message: "Erro ao remover registro.",
    });
  }
};
