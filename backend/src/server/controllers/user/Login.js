import { UserProvider } from "../../db/providers/user/index.js";
import { JWTService } from "../../shared/services/JWTService.js";
import { PasswordCrypto } from "../../shared/services/PasswordCrypto.js";

export const login = async (req, res) => {
  const { login, password } = req.body;

  if (
    login === undefined ||
    login.trim().length === 0 ||
    password === undefined ||
    password.trim().length === 0
  ) {
    return res.status(400).json({
      errors: {
        message: "Erro ao realizar login, problema nos dados informados.",
      },
    });
  }

  const result = await UserProvider.getByLogin(login).catch((e) => {
    return res.status(401).json({
      errors: {
        message: "Login ou senha são inválidos.",
      },
    });
  });

  if (result !== null) {
    if (!(await PasswordCrypto.verifyPassword(password, result.password))) {
      return res.status(401).json({
        errors: {
          message: "Login ou senha são inválidos.",
        },
      });
    } else {
      const accessToken = JWTService.sign({ id: result.id });

      if (accessToken === "JWT_SECRET_NOT_FOUND") {
        return res.status(500).json({
          errors: {
            message: "Erro ao gerar o token de acesso.",
          },
        });
      }
      return res.status(200).json({
        accessToken,
      });
    }
  } else {
    return res.status(401).json({
      errors: {
        message: "Login ou senha são inválidos.",
      },
    });
  }
};
