import Sequelize from "sequelize";
import { connection } from "../database.js";

const User = connection.define("users", {
  login: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

User.sync({ force: false });
//User.sync({ force: true });

export { User };
