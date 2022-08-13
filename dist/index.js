import express from "express";
import path from 'path';
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT;
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
console.log("process ev ", PORT);
app.use(express.static(path.join(__dirname, './client/build')));
app.get("/", (req, res, next) => {
    res.send("👋 hello 🌏 ");
});
app.listen(PORT, () => console.log(`server running in PORT =>  ${PORT}`));
