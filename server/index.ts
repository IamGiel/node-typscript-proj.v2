import express, {Application, Request, Response, NextFunction} from "express";
const app:Application = express();

app.get("/", (req:Request, res:Response, next:NextFunction)=> {
    res.send("👋 hello 🌏 ")
})

app.listen(3000, ()=> console.log(`server running in PORT 3000`))