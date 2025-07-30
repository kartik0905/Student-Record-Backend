import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/db.js";

dotenv.config();
const app = express();

app.use(express.json);

connectDB();


app.get("/",(req,res,next) => {
    res.send("Student Record API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


