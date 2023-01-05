import Sequelize from "sequelize";
import { connection } from "../database.js";
import { User } from "./User.js";

const Category = connection.define("categories", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.hasMany(Category, {
  foreignKey: {
    allowNull: false,
  },
  onUpdate: "CASCADE",
  onDelete: "NO ACTION",
});
Category.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  onUpdate: "CASCADE",
  onDelete: "NO ACTION",
});

Category.sync({ force: false });
//Category.sync({ force: true });

export { Category };
