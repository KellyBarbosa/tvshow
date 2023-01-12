import { UserProvider } from "../../db/providers/user/index.js";

export const updateById = async (req, res) => {
  const id = req.params.id;
  const login = req.body.login;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;

  if (id <= 0 || !Number.isInteger(Number(id))) {
    return res.status(400).json({
      errors: {
        message: "Erro ao atualizar registro, problema no parâmetro informado.",
      },
    });
  } else if (
    login === undefined ||
    login.trim().length === 0 ||
    password === undefined ||
    password.trim().length === 0 ||
    isAdmin === undefined ||
    typeof isAdmin !== "boolean"
  ) {
    return res.status(400).json({
      errors: {
        message: "Erro ao atualizar registro, problema nos dados enviados.",
      },
    });
  } else {
    const result = await UserProvider.updateById(
      login,
      password,
      isAdmin,
      id
    ).catch((e) => {
      return res.status(500).json({
        errors: {
          message: e.message,
        },
      });
    });
    console.log("Result: ", result);
    if (result) {
      return res.status(200).json({
        message: "Registro atualizado com sucesso.",
      });
    } else {
      return res.status(400).json({
        message: "Erro ao atualizar registro, registro não localizado.",
      });
    }
  }
};
