/**
 * dbconnectionmgr.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-15
 */
"use strict";

const mysql = require("mysql2");
const dbConfig = require("./dbconfig");

const dbConnectionMgr = (function(dbConfig) {
     /**
     * Makes and returns a Database Connection pool using the given config
     */
    const getConnection = function() {
        return mysql.createPool(dbConfig);
    }
    return {
        getConnection: getConnection
    }
})(dbConfig);

module.exports = dbConnectionMgr;