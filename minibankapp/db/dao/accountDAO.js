/**
 * accountDAO.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-14
 */
"use strict";

const dbConnectionMgr = require("../dbconnectionmgr");
const Account = require("../../model/account");

const accountDAO = (function() {
    const getAccounts = async function() {
        const qryStrGetAccounts = `SELECT * FROM accounts`;
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            // const [accounts] = await dbConnection.promise().query(qryStrGetAccounts);
            const accountsDBRows = await dbConnection.promise().query(qryStrGetAccounts);
            const accounts = [];
            for (let account of accountsDBRows[0]) {
                accounts.push(new Account(account.accountId, account.txtAccountNo, account.txtCustomerName, account.ddlAccountType));
            }
            // close connection
            return accounts;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };
    
    const saveAccount = async function(account) {
        // const value = `${account.txtAccountNo}, ${account.txtAccountName}, ${account.ddlAccountType}`;
        const cmdStrSaveAccount = `INSERT INTO accounts (txtAccountNo, txtCustomerName, ddlAccountType)
            values ('${account.getTxtAccountNo()}', '${account.getTxtCustomerName()}', '${account.getDdlAccountType()}')`;
            try {
                const dbConnection = dbConnectionMgr.getConnection();
                const saveOpResult = await dbConnection.promise().execute(cmdStrSaveAccount);
                // console.log(saveOpResult);
                // close connection
                return saveOpResult;
            } catch (error) {
                console.log(`DB Access Error: ${error}`);
                throw error;
            }
    };

    return {
        getAccounts: getAccounts,
        saveAccount: saveAccount
    }
})();

module.exports = accountDAO;