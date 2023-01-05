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
  onUpdate: "CASCADE",
  onDelete: "NO ACTION",
});
Program.belongsTo(Category, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
  onUpdate: "CASCADE",
  onDelete: "NO ACTION",
});

User.hasMany(Program, {
  foreignKey: {
    allowNull: false,
  },
  onUpdate: "CASCADE",
  onDelete: "NO ACTION",
});
Program.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  onUpdate: "CASCADE",
  onDelete: "NO ACTION",
});

Program.sync({ force: false });
//Program.sync({ force: true });

export { Program };
