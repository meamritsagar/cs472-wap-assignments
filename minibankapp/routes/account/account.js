/**
 * account.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-14
 */
"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();
// const account = require("../../model/account");
const accountController = require("../../controller/accountcontroller");

// Define routes for account pages
accountRouter.get("/account", async (req, res) => {
    console.log(`Presenting accountpage`);
    const accounts = await accountController.getAccounts(req, res);
    // console.log(accounts);
    res.locals = {accounts: accounts};
    res.render("account");
});

accountRouter.post("/account", async (req, res) => {
    const result = await accountController.addNewAccount(req, res);
    console.log(result);
    res.redirect(303, "/account");
});

module.exports = accountRouter;