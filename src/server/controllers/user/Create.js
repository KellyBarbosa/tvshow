import { UserProvider } from "../../db/providers/user/index.js";

export const create = async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;

  const result = await UserProvider.create(login, password, isAdmin).catch((e) => {
    return res.status(500).json({   
      errors: {
        default: e.message
      }
    });
  });

  if(!result) {
    return res.status(400).json({   
      errors: {
        default: "Erro ao cadastrar registro."
      }
    });
  } else {
    return res.status(201).json({
      message: "Cadastro realizado com sucesso.",
    });
  }  
};
