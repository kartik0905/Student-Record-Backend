import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/db.js";
import router from "./src/routes/student.routes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/students", router);

connectDB();

app.get("/", (req, res, next) => {
  res.send("Student Record API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
