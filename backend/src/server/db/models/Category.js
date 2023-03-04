import Sequelize from "sequelize";
import { connection } from "../database.js";
import { User } from "./User.js";

const Category = connection.define("categories", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

User.hasMany(Category, {
  foreignKey: {
    allowNull: false,
  },
});
Category.belongsTo(User);

export { Category };
