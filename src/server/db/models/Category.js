import Sequelize from "sequelize";
import { connection } from "../database.js";
// import { Program } from "./Program.js";
import { User } from "./User.js";

const Category = connection.define("category", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

/* Category.hasMany(Program);
Program.belongsTo(Category); */

User.hasMany(Category);
Category.belongsTo(User);

Category.sync({ force: true });

export { Category };
