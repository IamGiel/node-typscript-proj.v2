
console.log("app.ts here! HELLO 👋")

import {Request, Response, NextFunction, Application, ErrorRequestHandler} from "express";
import {Server} from "http";
// import createHttpError from "http-errors";
import {config} from "dotenv";
const express = require("express")
const createHttpError = require("http-errors")
const path = require("path");



config() // this runs dotenv

const PORT:number = Number(process.env.PORT);
const app:Application = express()

app.get('/', (req:Request,res:Response,next:NextFunction)=> {
    // res.send(`hello 🌏, rootRoute here! 👋"`)
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"));

})

app.use(express.static(path.resolve(__dirname, "./client/build")));

// error handler 
app.use((req:Request,res:Response,next:NextFunction)=> {
    next(new createHttpError.NotFound())
})

const errorHandler:ErrorRequestHandler = (err,req,res,next)=> {
    res.status(err.status || 500)
    res.send({
        status:err.status || 500,
        message:err.message
    })
}

app.use(errorHandler)

const server:Server = app.listen(PORT, ()=> {
    console.log(`server is 🏃🏃🏃💨 running on port: ${PORT} and react client 🌏 is in port: 3000`)
})
