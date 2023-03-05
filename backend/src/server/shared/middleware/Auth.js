import { JWTService } from "../services/JWTService.js";

export const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: {
        message: "Usuário não autenticado.",
      },
    });
  }
  const [type, token] = authorization.split(" ");
  if (type !== "Bearer") {
    return res.status(401).json({
      errors: {
        message: "Usuário não autenticado.",
      },
    });
  }
  const jwtData = JWTService.verify(token);
  if (jwtData === "jwtData") {
    return res.status(500).json({
      errors: {
        message: "Erro ao verificar o token.",
      },
    });
  } else if (jwtData === "INVALID_TOKEN") {
    return res.status(401).json({
      errors: {
        message: "Usuário não autenticado.",
      },
    });
  }

  req.headers.idUsuario = jwtData.id.toString();

  return next();
};
