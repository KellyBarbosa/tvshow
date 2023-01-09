import { UserProvider } from "../../db/providers/user/index.js";

export const getById = async (req, res) => {
  const id = req.body.id;
  const result = await UserProvider.getById(id);
  if (result === null) {
    return res.status(400).json({
      message: "Registro não localizado.",
    });
  } else {
    return res.status(200).json(result);
  }
};
