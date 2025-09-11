import express from "express";
import connectToDatabase from "./config/database.js";

const db = await connectToDatabase();
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

const app = express();
app.use(express.json());

export default app;