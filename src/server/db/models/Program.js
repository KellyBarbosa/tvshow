import Sequelize from "sequelize";
import { User } from "./User.js";
import { Category } from "./Category.js";
import { connection } from "../database.js";

const Program = connection.define("programs", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Category.hasMany(Program, {
  foreignKey: {
    allowNull: false,
  },
});
Program.belongsTo(Category);

User.hasMany(Program, {
  foreignKey: {
    allowNull: false,
  },
});
Program.belongsTo(User);

export { Program };
