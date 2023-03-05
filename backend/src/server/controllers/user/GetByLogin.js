import { UserProvider } from "../../db/providers/user/index.js";

export const getByLogin = async (req, res) => {
  const login = req.body.login;

  if (login === undefined || login.trim().length === 0) {
    return res.status(400).json({
      errors: {
        message: "Erro ao consultar registro, problema nos dados enviados.",
      },
    });
  }

  const result = await UserProvider.getByLogin(login).catch((e) => {
    return res.status(500).json({
      errors: {
        message: e.message,
      },
    });
  });
  if (result === null) {
    return res.status(400).json({
      message: "Registro não localizado.",
    });
  } else {
    return res.status(200).json(result);
  }
};
