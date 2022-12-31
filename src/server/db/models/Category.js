import Sequelize from "sequelize";
import { connection } from "../database.js";
import { Program } from "./Program.js";

const Category = connection.define("category", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Category.hasMany(Program);
Program.belongsTo(Category);

Category.sync({ force: false });

export { Category };
