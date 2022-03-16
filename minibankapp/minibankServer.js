/**
 * minibankServer.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-14
 */
"use strict";

const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/home/home");
const accountRoutes = require("./routes/account/account");

const app = express();

// Define middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static(path.join(__dirname, "public")));

app.use("", homeRoutes);

app.use("", accountRoutes);

// Put the Error 404 middleware last
app.use((req, res, next) => {
    console.log(`Responding by redirecting to the 404 Error page`);
    res.status(404);
    res.status(404).redirect(303, "/static/html/404.html");
});

const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});