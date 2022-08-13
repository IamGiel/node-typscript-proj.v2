import express, {Application, Request, Response, NextFunction} from "express";
import path from 'path';
const __dirname = path.resolve();
const app:Application = express();
import cors from "cors";


app.use(cors())
const PORT = process.env.PORT;
import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get("*", (req:Request, res:Response, next:NextFunction)=> {
        console.log("👋 hello 🌏 ")
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.get("/", (req:Request, res:Response, next:NextFunction)=> {
    console.log("👋 hello 🌏 ")
    res.send({"message":`👋 hello 🌏, I am server running from ${PORT}`})
})

app.listen(PORT || 4000, ()=> console.log(`server running in PORT:  ${PORT}`))