npm i -D typescript ts-node nodemon
npm i express
npx tsc --init

mkdir src
create src/app.ts --> entry point to our app

modify scripts in package.json
- "dev": "nodemon ./src/app.ts"
- "start":"node ./dist/app.js"


tsconfig tweaks:
- "rootDir": "./src",
- "outDir": "./dist",  
- "include": ["./src"]


save... 

terminal run `tsc` or `npx tsc` (if you did not have typescript installed globally)

add devDependencies 
- npm i -D @types/express @types/node

add dependencies (non devDependencies)
- npm i http-errors
- npm i @types/http-errors

set up App.ts

```
    console.log("app.ts here! HELLO 👋")

    import express, {Request, Response, NextFunction, Application} from "express";

    const PORT = 3001;
    const app:Application = express()
    app.get('/', (req:Request,res:Response,next:NextFunction)=> {
        res.send(`hello 🌏, rootRoute here! 👋"`)
    })

    app.listen(PORT, ()=> {
        console.log(`server is 🏃🏃🏃💨 running on port: ${PORT}`)
    })
```

## TO RUN 

- dev `npm run dev`
