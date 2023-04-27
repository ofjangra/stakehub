import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import logger from './logger/logger.index.js'
import { ordersRouter } from './routes/orders.routes.js'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config({
    path:"./config.env"
})


const app = express()


app.use(bodyParser.json())


const port  = process.env.PORT || 5000

const dbURI = process.env.DB_URI

if (typeof dbURI === "string") {
    mongoose.connect(dbURI)
}

mongoose.connection.on('error', (err) =>{
    logger.error(err)
})

mongoose.connection.on('connected', () =>{
    logger.info('database connected')
})

ordersRouter(app)

app.use(express.static("dist"))

app.get("*", (req,res)=>{
    return res.sendFile(path.resolve(__dirname, "dist", "index.html"))
})

app.listen(port, () => {
    logger.info(`server started at port : ${port}`)
})
