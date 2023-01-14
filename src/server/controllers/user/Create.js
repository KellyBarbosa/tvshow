import { UserProvider } from "../../db/providers/user/index.js";

export const create = async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;

  if (
    login === undefined ||
    login.trim().length === 0 ||
    password === undefined ||
    password.trim().length === 0 ||
    isAdmin === undefined ||
    typeof isAdmin !== "boolean"
  ) {
    return res.status(400).json({
      errors: {
        message: "Erro ao cadastrar registro, problema nos dados enviados.",
      },
    });
  }

  const result = await UserProvider.create(login, password, isAdmin).catch(
    (e) => {
      return res.status(500).json({
        errors: {
          message: e.message,
        },
      });
    }
  );

  if (!result) {
    return res.status(400).json({
      errors: {
        message:
          "Erro ao cadastrar registro, pois já existe um usuário com o mesmo login.",
      },
    });
  } else {
    return res.status(201).json({
      message: "Cadastro realizado com sucesso.",
    });
  }
};
