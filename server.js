import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Its main page");
});

const PORT = process.env.PORT || 8000;

db();
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
