import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import mainRoutes from './routes/index';
import { dbConnect } from "./config/db";


const app: Application = express();

dotenv.config();

dbConnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", mainRoutes)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
