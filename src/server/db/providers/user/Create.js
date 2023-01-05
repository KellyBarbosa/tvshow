import { User } from "../../models/User.js";

export default {
  async create(login, password, isAdmin) {
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
  },
};
