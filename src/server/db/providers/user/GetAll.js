import { User } from "../../models/User.js";

export const getAll = async () => {
  const users = await User.findAll({
    attributes: ["login", "isAdmin"],
  });
  return users;
};
