import express, {Application, Request, Response, NextFunction} from "express";
import path from 'path';
const __dirname = path.resolve();
const app:Application = express();

import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import


console.log("process ev ", process.env.PORT)
app.use(express.static(path.join(__dirname, './client/build')));
app.get("/", (req:Request, res:Response, next:NextFunction)=> {
    res.send("👋 hello 🌏 ")
    
})

app.listen(process.env.PORT || 3000, ()=> console.log(`server running in PORT 3000`))