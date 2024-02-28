import express from "express";
import connectDatabase from "./src/database/db.js"
import dotenv from "dotenv"

import authRoute from "./src/routes/auth.routes.js"
import userRoute from "./src/routes/user.routes.js"
import sexRoute from "./src/routes/sex.routes.js"
import cors from 'cors';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({

  origin: [
    'http://localhost:5173',
    'https://bladefall.vercel.app'
  ]
}))

connectDatabase();
//ROTAS
app.use(express.json())
app.use("/", sexRoute)
app.use("/user", userRoute)
app.use("/auth", authRoute)

app.listen(3000, () => console.log(`Server running on port ${port}`));