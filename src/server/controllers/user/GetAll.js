import { UserProvider } from "../../db/providers/user/index.js";

export const getAll = async (_, res) => {
  const result = await UserProvider.getAll();
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json({
      message: "Erro ao buscar usuários.",
    });
  }
};
