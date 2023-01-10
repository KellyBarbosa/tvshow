import { UserProvider } from "../../db/providers/user/index.js";

export const getAll = async (_, res) => {
  const result = await UserProvider.getAll().catch((e) => {
    return res.status(500).json({   
      errors: {
        default: e.message
      }
    });
  });

    return res.status(200).json(result);
};
