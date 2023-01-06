import { UserProvider } from "../../db/providers/user/index.js";

export const deleteById = async (req, res) => {
  const login = req.body.login;
  const result = UserProvider.deleteById(login);
  if (result) {
    return res.status(200).json({
      message: "Usuário removido com sucesso.",
    });
  } else {
    return res.status(500).json({
      message: "Erro ao remover usuário.",
    });
  }
};
