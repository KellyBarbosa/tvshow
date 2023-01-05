import { User } from "../../db/models/User.js";

export const create = async (login, password, isAdmin) => {
  const [user, created] = await User.findOrCreate({
    where: {
      login,
    },
    defaults: {
      password,
      isAdmin,
    },
  });
  return created;
};
