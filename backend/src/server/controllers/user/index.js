import * as create from "./Create.js";
import * as getAll from "./GetAll.js";
import * as getById from "./GetById.js";
import * as getByLogin from "./GetByLogin.js";
import * as updateById from "./UpdateById.js";
import * as deleteById from "./DeleteById.js";
import * as login from "./Login.js";

export const UserController = {
  ...create,
  ...getAll,
  ...getById,
  ...getByLogin,
  ...updateById,
  ...deleteById,
  ...login,
};
