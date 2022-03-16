/**
 * account.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-14
 */
"use strict";

class Account {
    #accountId = null;
    #txtAccountNo = null;
    #txtCustomerName = null;
    #ddlAccountType = null;

    constructor(accountId, txtAccountNo, txtCustomerName, ddlAccountType) {
        this.#accountId = accountId;
        this.#txtAccountNo = txtAccountNo;
        this.#txtCustomerName = txtCustomerName;
        this.#ddlAccountType = ddlAccountType;
    }
    getAccountId() { return this.#accountId; }
    getTxtAccountNo() { return this.#txtAccountNo; }
    getTxtCustomerName() { return this.#txtCustomerName; }
    getDdlAccountType() { return this.#ddlAccountType; }

    setAccountId(accountId) {
        this.#accountId = accountId;
    }
    setTxtAccountNo(txtAccountNo) {
        this.#txtAccountNo = txtAccountNo;
    }
    setTxtCustomerName(txtCustomerName) {
        this.#txtCustomerName = txtCustomerName;
    }
    setDdlAccountType(ddlAccountType) {
        this.#ddlAccountType = ddlAccountType;
    }
}

module.exports = Account;