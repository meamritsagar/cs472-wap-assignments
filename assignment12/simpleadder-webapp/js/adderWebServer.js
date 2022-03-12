/**
 * adderWebServer.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-11
 */
"use strict";
const http = require("http");
const url = require("url");
const fs = require("fs");
const addmod = require("./addmod.js");

console.log(`Starting server...`);

http.createServer(function(req, res) {
    const endPointURL = url.parse(req.url, true);
    const endPointURLFileName = "." + endPointURL.pathname;

    if(endPointURL.pathname == "/add.js") {
        addmod.add(req, res, endPointURL.query);
    } else {
        fs.readFile(endPointURLFileName, function(err, data) {
            if(err) {
                res.writeHead(404, {"Content-Type": "text/html"});
                return res.end("<h2 style='color:red;'>404 Not Found</h2>");
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);

console.log(`Server started. Listening on port 8080`)