import { CategoryProvider } from "../../db/providers/category/index.js";

export const getAll = async (_, res) => {
  const result = await CategoryProvider.getAll().catch((e) => {
    return res.status(500).json({
      errors: {
        default: e.message
      }
    })
  })
  return res.status(200).json(result);
};
