import { ProgramProvider } from "../../db/providers/program/index.js";

export const getAll = async (_, res) => {
  const result = await ProgramProvider.getAll().catch((e) => {
    return res.status(500).json({
      errors: {
        message: e.message,
      },
    });
  });
  return res.status(200).json(result);
};
