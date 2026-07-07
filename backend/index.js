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

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    databaseConfigured: Boolean(process.env.DATABASE_URL),
  });
});

let isDbReady = false;

const connect = async () => {
  if (isDbReady) return;

  if (!sequelize) {
    throw new Error("DATABASE_URL is not set in environment variables");
  }

  await sequelize.authenticate();

  if (process.env.NODE_ENV !== "production") {
    await sequelize.sync({ alter: true });
  }

  isDbReady = true;
  console.log("Connected to Neon PostgreSql");
};

app.use("/api/v1", async (req, res, next) => {
  try {
    await connect();
    next();
  } catch (error) {
    console.error("Database connection failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: error.message,
    });
  }
});

app.use("/api/v1", router);

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

if (!process.env.VERCEL) {
  connect()
    .then(() => {
      app.listen(port, () => {
        console.log(`server is running at ${port}`);
      });
    })
    .catch((error) => {
      console.error("Connection Failed", error.message);
    });
}

export default app;
