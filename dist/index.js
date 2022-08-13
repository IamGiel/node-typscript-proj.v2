import express from "express";
import path from 'path';
const __dirname = path.resolve();
const app = express();
import cors from "cors";
app.use(cors());
const PORT = process.env.PORT;
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// app.use(express.static(path.join(__dirname, './client/build')));
app.get("/", (req, res, next) => {
    console.log("👋 hello 🌏 ");
    res.send({ "message": `👋 hello 🌏, I am server running from ${PORT}` });
});
app.listen(PORT || 8080, () => console.log(`server running in PORT:  ${PORT}`));
