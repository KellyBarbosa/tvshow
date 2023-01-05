import Sequelize from "sequelize";
import { User } from "./User.js";
import { Category } from "./Category.js";
import { connection } from "../database.js";

const Program = connection.define("program", {
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

Category.hasMany(Program);
Program.belongsTo(Category);

User.hasMany(Program);
Program.belongsTo(User);

//Program.sync({ force: false });
Program.sync({ force: true });

export { Program };
