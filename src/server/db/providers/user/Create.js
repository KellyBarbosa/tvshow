import { User } from "../../models/User.js";

export default {
  async create(login, password, isAdmin) {
    try {
      const [user, created] = await User.findOrCreate({
        where: {
          login,
        },
        defaults: {
          password,
          isAdmin,
        },
      });
        return created     
    } catch (error) {
      return new Error("Erro ao cadastrar registro.")
    }
}};
