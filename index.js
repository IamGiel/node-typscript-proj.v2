"use strict";
exports.__esModule = true;
console.log("app.ts here! HELLO 👋");
// import createHttpError from "http-errors";
var dotenv_1 = require("dotenv");
var express = require("express");
var createHttpError = require("http-errors");
var path = require("path");
(0, dotenv_1.config)(); // this runs dotenv
var PORT = Number(process.env.PORT);
var app = express();
app.get('/', function (req, res, next) {
    // res.send(`hello 🌏, rootRoute here! 👋"`)
    console.log("this is server running root route");
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});
app.use(express.static(path.resolve(__dirname, "./client/build")));
// error handler 
app.use(function (req, res, next) {
    next(new createHttpError.NotFound());
});
var errorHandler = function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message
    });
};
app.use(errorHandler);
var server = app.listen(PORT, function () {
    console.log("server is \uD83C\uDFC3\uD83C\uDFC3\uD83C\uDFC3\uD83D\uDCA8 running on port: ".concat(PORT, " and react client \uD83C\uDF0F is in port: 3000"));
});
