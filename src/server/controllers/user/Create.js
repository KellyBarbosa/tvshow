import { UserProvider } from "../../db/providers/user/index.js";

export const create = async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;

  const result = await UserProvider.create(login, password, isAdmin);

  if (result) {
    return res.status(201).json({
      message: "Cadastro realizado com sucesso.",
    });
  } else {
    return res.status(500).json({
      message: "Erro ao cadastrar registro.",
    });
  }
};
