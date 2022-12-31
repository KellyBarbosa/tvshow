import Sequelize from "sequelize";
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

Program.sync({ force: false });

export { Program };
