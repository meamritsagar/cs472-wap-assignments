// patients.js for Patients Registration Form
window.onload = function() {
    
    function registerPatient() {
        let patientId = document.getElementById("patientId").value;
        let firstName = document.getElementById("firstName").value;
        let middleName = document.getElementById("middleName").value;
        let lastName = document.getElementById("lastName").value;
        let dateOfBirth = document.getElementById("dateOfBirth").value;
        let department = document.getElementById("department").value;
        let outPatient = document.querySelector('input[name="outPatient"]:checked').value;
        // let outPatient = document.getElementsByName("outPatient").value;

        alert("Patient Registered: " + "\n" +
            "Patient ID No: " + patientId + "\n" +
            "First Name: " + firstName + "\n" +
            "Middle Initial(s): " + middleName + "\n" +
            "Last Name: " + lastName + "\n" +
            "Date Of Birt: " + dateOfBirth + "\n" +
            "Department: " + department + "\n" +
            "Out-Patient: " + outPatient);
    }

    var btnSubmit = document.getElementById("submit");
    btnSubmit.addEventListener("click", registerPatient);
};