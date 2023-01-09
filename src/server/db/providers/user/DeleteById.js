import { User } from "../../models/User.js";

export const deleteById = async (id) => {
  const deleted = User.destroy({
    where: {
      id,
    },
  })
    .then(() => true)
    .catch(() => false);
  return deleted;
};
