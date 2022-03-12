/**
 * hcmcptients.js
 * 
 * @author Amrit Raj Sagar
 * @since 2022-03-10
 */
"use strict";
// Reading the values from Form

$(document).ready(function() {
    let listOfPatient = [];
    // Displaying the Data in the Table at the bottom of the page 
    $("#formNewPatient").submit(function(event) {
        event.preventDefault();
        console.log(event.target);
        const patientId = $("#patientIdNumber").val();
        const firstName = $("#firstName").val();
        const middleInitials = $("#middleInitials").val();
        const lastName = $("#lastName").val();
        const dateOfBirth = $("#dateOfBirth").val();
        const department = $("#ddlDepartment").val();
        const outPatientFlag = $("input[name='radioIsOutPatient']:checked").val();

        // const rowId = $("#tbodyPatientsList tr").length + 1;

        let listOfPatientObj = {
            patientId: patientId,
            firstName: firstName,
            middleInitials: middleInitials,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            department: department,
            outPatientFlag: outPatientFlag
        };

        listOfPatient.push(listOfPatientObj);
        // insertIntoTable(listOfPatient);
        // $("#formNewPatient").trigger("reset");

        // Using JQuery-------------------
        let insertListOfPatient = `<tr>
            <td>${patientId}</td>
            <td>${firstName}</td>
            <td>${middleInitials}</td>
            <td>${lastName}</td>
            <td>${dateOfBirth}</td>
            <td>${department}</td>
            <td>${outPatientFlag}</td>
        </tr>`;

        $("#tbodyPatientsList").append(insertListOfPatient);
        $("#formNewPatient").trigger("reset");

        // Using DOM API--------------------
    /*
        const tbodyPatientsList = document.querySelector("#tbodyPatientsList");
        const newRow = tbodyPatientsList.insertRow(-1);
        // patientId
        const newCellPatientId = newRow.insertCell(0);
        const strNewPatientId = document.createTextNode(`${patientId}`);
        newCellPatientId.appendChild(strNewPatientId);
        // firstName
        const newCellFirstName = newRow.insertCell(1);
        const strNewFirstName = document.createTextNode(`${firstName}`);
        newCellFirstName.appendChild(strNewFirstName);
        // middleInitials
        const newCellMiddleInitials = newRow.insertCell(2);
        const strNewMiddleInitials = document.createTextNode(`${middleInitials}`);
        newCellMiddleInitials.appendChild(strNewMiddleInitials);
        // lastName
        const newCellLastName = newRow.insertCell(3);
        const strNewLastName = document.createTextNode(`${lastName}`);
        newCellLastName.appendChild(strNewLastName);
        // dateOfBirth
        const newCellDateOfBirth = newRow.insertCell(4);
        const strNewDateOfBirth = document.createTextNode(`${dateOfBirth}`);
        newCellDateOfBirth.appendChild(strNewDateOfBirth);
        // department
        const newCellDepartment = newRow.insertCell(5);
        const strNewDepartment = document.createTextNode(`${department}`);
        newCellDepartment.appendChild(strNewDepartment);
        // outPatientFlag
        const newCellOutPatientFlag = newRow.insertCell(6);
        const strNewOutPatientFlag = document.createTextNode(`${outPatientFlag}`);
        newCellOutPatientFlag.appendChild(strNewOutPatientFlag);
        $("#formNewPatient").trigger("reset");
    */
    });

    // Insert into Table
    function insertIntoTable(listOfPatient) {
        $("#tbodyPatientsList").empty();
        listOfPatient.forEach(obj => {
            let listOfPatientTbl = `<tr>
                <td>${obj.patientId}</td>
                <td>${obj.firstName}</td>
                <td>${obj.middleInitials}</td>
                <td>${obj.lastName}</td>
                <td>${obj.dateOfBirth}</td>
                <td>${obj.department}</td>
                <td>${obj.outPatientFlag}</td>
            </tr>`;
            $("#tbodyPatientsList").append(listOfPatientTbl);
        });
    }

    // Age Calculator
    function getAge(dateString) 
    {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < (birthDate.getDate()+1))) 
        {
            age--;
        }
        return age;
    }

    // Checkbox Show Elderly Patients Only Filter
    $("#chkElderlyPatients").click(function() {
        if ($(this).is(":checked")) {
            $("#chkShowOutPatients").attr("disabled", true);
            let filterElderly = listOfPatient.filter(obj => (getAge(obj.dateOfBirth) >= 65));
            insertIntoTable(filterElderly);
        } else {
            $("#chkShowOutPatients").removeAttr("disabled");
            insertIntoTable(listOfPatient);
        }
    });

    // Checkbox Show Out Patient Only Filter
    $("#chkShowOutPatients").click(function() {
        if ($(this).is(":checked")) {
            $("#chkElderlyPatients").attr("disabled", true);
            let filterOutPatient = listOfPatient.filter(obj => (obj.outPatientFlag == "Yes"));
            insertIntoTable(filterOutPatient);
        } else {
            $("#chkElderlyPatients").removeAttr("disabled");
            insertIntoTable(listOfPatient);
        }
    });
});
