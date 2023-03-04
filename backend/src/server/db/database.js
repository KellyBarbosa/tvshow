import { Sequelize } from "sequelize";

const connection = new Sequelize("tvshow", "root", "root", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
  logging: false,
  timezone: "-03:00",
});

export { connection };
