import Sequelize from "sequelize";
import { connection } from "../database.js";
import { Program } from "./Program.js";
import { Category } from "./Category.js";

const User = connection.define("user", {
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

User.hasMany(Program);
Program.belongsTo(User);

User.hasMany(Category);
Category.belongsTo(User);

User.sync({ force: false });

export { User };
