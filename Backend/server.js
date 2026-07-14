import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config()

const app = express();
connectDB();

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/task",taskRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`app running on port : ${process.env.PORT}`);
})