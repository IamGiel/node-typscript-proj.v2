import express from "express";
import path from 'path';
const __dirname = path.resolve();
const app = express();
app.use(express.static(path.join(__dirname, './client/build')));
app.get("/", (req, res, next) => {
    res.send("👋 hello 🌏 ");
});
app.listen(3000, () => console.log(`server running in PORT 3000`));
