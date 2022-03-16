/**
 * accountDAO.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-14
 */
"use strict";

const dbConnectionMgr = require("../dbconnectionmgr");

const accountDAO = (function() {
    const getAccounts = async function() {
        const qryStrGetAccounts = `SELECT * FROM accounts`;
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const [accounts] = await dbConnection.promise().query(qryStrGetAccounts);
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
                console.log(saveOpResult);
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