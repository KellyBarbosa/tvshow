import { UserProvider } from "../../db/providers/user/index.js";

export const updateById = async (req, res) => {
  const id = req.body.id;
  const login = req.body.login;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;

  const result = await UserProvider.updateById(login, password, isAdmin, id);
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
