import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./src/config/database.js";
import router from "./src/routes/employee.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
// app.use()
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("hello world");
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connected to Neon PostgreSql");
  } catch (error) {
    console.log("Connection Failed", error.message);
  }
};

connect();

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
