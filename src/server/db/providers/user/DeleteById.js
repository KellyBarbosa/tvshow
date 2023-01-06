import { User } from "../../models/User.js";

export const deleteById = async (login) => {
  const deleted = User.destroy({
    where: {
      login,
    },
  })
    .then(() => true)
    .catch(() => false);
  return deleted;
};
