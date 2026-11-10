import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import urlRouter from "./routes/urlRoutes.js"
import path from "path"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/",urlRouter)


// We are serving the react fronend from the backend
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})


// First connecting to mongodb then running the app
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
  });
});
