import { PasswordCrypto } from "../../../shared/services/PasswordCrypto.js";
import { User } from "../../models/User.js";

export const create = async (login, password, isAdmin) => {
  try {
    const hashedPassword = await PasswordCrypto.hashPassword(password);
    const [user, created] = await User.findOrCreate({
      where: {
        login,
      },
      defaults: {
        password: hashedPassword,
        isAdmin,
        active: true,
      },
    });
    return created;
  } catch (error) {
    return new Error("Erro ao cadastrar registro.");
  }
};
