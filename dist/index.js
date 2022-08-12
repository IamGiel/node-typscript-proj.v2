import express from "express";
const app = express();
app.get("/", (req, res, next) => {
    res.send("👋 hello 🌏 ");
});
app.listen(3000, () => console.log(`server running in PORT 3000`));
