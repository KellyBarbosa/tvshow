import { User } from "../../models/User.js";

export const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};
