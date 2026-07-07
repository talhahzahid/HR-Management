import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

function getDatabaseUrl() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;

  // channel_binding=require often breaks serverless runtimes (Vercel)
  return url
    .replace(/([?&])channel_binding=require(&?)/g, "$1")
    .replace(/[?&]$/, "");
}

const databaseUrl = getDatabaseUrl();

export const sequelize = databaseUrl
  ? new Sequelize(databaseUrl, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      pool: {
        max: 1,
        min: 0,
        idle: 10000,
        acquire: 20000,
      },
      logging: false,
    })
  : null;
