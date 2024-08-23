import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()


const app = express()
app.use(express.json())


mongoose.connect(process.env.MONGODB_URI)


app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})