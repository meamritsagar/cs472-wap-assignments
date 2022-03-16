/**
 * accountcontroller.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-15
 */
 "use strict";

 const accountDAO = require("../db/dao/accountDAO");
 const Account = require("../model/account");

 const accountController = (function() {
     const getAccounts = async function(req, res) {
        try {
            const accounts = await accountDAO.getAccounts();
            // console.log(`Controller: Account List: ${accounts}`);
            return accounts;
        } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
     };

     const addNewAccount = async function(req, res) {
         const account = new Account(null, req.body.txtAccountNo, req.body.txtCustomerName, req.body.ddlAccountType);
         try {
            const opRes = await accountDAO.saveAccount(account);
            console.log(`Controller: Save Account output: ${opRes}`);
            return opRes;
         } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
         }
     }

     return {
         getAccounts: getAccounts,
         addNewAccount: addNewAccount
     }
    
 })();

 module.exports = accountController;