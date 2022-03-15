/**
 * calculatorServer.js
 * Simple Calculator
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-14
 */
"use strict";

const express = require("express");
const path = require("path");
const app = express();
const calculate = require("./public/js/calculator.js");

// Default Middlewares
app.use(express.urlencoded({ extended: false }));

// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    console.log(`This middleware is always run`);
    next();
});

// Homepage from view
app.get("/", (req, res, next) => {
   console.log(`In the homepage http-get route's middleware`);
   res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/calculate", (req, res, next) => {
    const result = calculate(req.body.first, req.body.second, req.body.operation);
    const content = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Simple Calculator</title>
            </head>
            <body>
                <div>
                    <p>The Answer is: ${String(result)}</p>
                </div>
                <div>
                    <a href="/">Another Calculation</a>
            </body>
        </html>
    `;

    res.send(content);
    res.end();
});

// Put the Error 404 middleware last
app.use((req, res, next) => {
    console.log(`Responding by redirecting to the 404 Error page`);
    res.status(404).redirect(303, "/static/html/404.html");
});

const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});