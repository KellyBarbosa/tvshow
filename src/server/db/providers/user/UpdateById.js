import { User } from "../../models/User.js";

export const updateById = async (login, password, isAdmin, id) => {
  const updated = await User.update(
    {
      login,
      password,
      isAdmin,
    },
    {
      where: {
        id,
      },
    }
  )
    .then(() => true)
    .catch(() => false);
  return updated;
};
