/**
 * home.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-14
 */
"use strict";

const express = require("express");
const path = require("path");
const homeRouter = express.Router();

// Define home page routes
homeRouter.get("/", (req, res) => {
    console.log(`Presenting homepage 1`);
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});
homeRouter.get("/home", (req, res) => {
    console.log(`Presenting homepage 2`);
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});

module.exports = homeRouter;