import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

import check from './routes/check.js'
import createProof from './routes/createProof.js'

import fs from 'fs'

import https from 'node:https';

var privateKey = fs.readFileSync( './ssl/ssl.key' );
var certificate = fs.readFileSync( './ssl/ssl.crt' );


const app = express()
dotenv.config()


const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


app.use(cors())
app.use(express.json())

//Routes
app.use('/api/checkAdress', check)
app.use('/api/createProof', createProof)

async function start() {
    try {
        await mongoose.connect(
            `mongodb://127.0.0.1/${DB_NAME}`
        )
        //app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
        https.createServer({
            key: privateKey,
            cert: certificate
        }, app).listen(PORT, () => console.log(`Server started on port: ${PORT}`));
    } catch (error) {
        console.log(error)
    }
}
start()