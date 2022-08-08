"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("app.ts here! HELLO 👋");
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const PORT = 3001;
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    res.send(`hello 🌏, rootRoute here! 👋"`);
});
// error handler 
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message
    });
};
app.use(errorHandler);
const server = app.listen(PORT, () => {
    console.log(`server is 🏃🏃🏃💨 running on port: ${PORT}`);
});
