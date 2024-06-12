const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres.jfbhimyuokljzihsdroy",
  "Aeh7GGLyDvwXgOld",
  "postgres",
  {
    dialect: "postgres",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
  }
);

module.exports = sequelize;
