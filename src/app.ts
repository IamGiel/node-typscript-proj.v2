console.log("app.ts here! HELLO 👋")

import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from "express";
import {Server} from "http";
import createHttpError from "http-errors";
import {config} from "dotenv";

config() // this runs dotenv

const PORT:number = Number(process.env.PORT);
const app:Application = express()

app.get('/', (req:Request,res:Response,next:NextFunction)=> {
    res.send(`hello 🌏, rootRoute here! 👋"`)
})

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
    console.log(`server is 🏃🏃🏃💨 running on port: ${PORT}`)
})