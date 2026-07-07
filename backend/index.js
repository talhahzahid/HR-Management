import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./src/config/database.js";
import router from "./src/routes/employee.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || true,
  }),
);
app.use(express.json());

let isDbReady = false;

const connect = async () => {
  if (isDbReady) return;

  await sequelize.authenticate();

  if (process.env.NODE_ENV !== "production") {
    await sequelize.sync({ alter: true });
  }

  isDbReady = true;
  console.log("Connected to Neon PostgreSql");
};

app.use(async (req, res, next) => {
  try {
    await connect();
    next();
  } catch (error) {
    console.log("Connection Failed", error.message);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("hello world");
});

if (!process.env.VERCEL) {
  connect()
    .then(() => {
      app.listen(port, () => {
        console.log(`server is running at ${port}`);
      });
    })
    .catch((error) => {
      console.log("Connection Failed", error.message);
    });
}

export default app;
