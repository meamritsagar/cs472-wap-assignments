// WebForm1 -- To Implement Print the Entered value to Console.
window.onload = function() {

    function userSubmit(e) {
        // e.preventDefault();
        console.log("Email address: " + document.getElementById("inputEmail").value);
        console.log("Password: " + document.getElementById("inputPassword").value);
        console.log("Website: " + document.getElementById("inputWebsite").value);
        console.log("Check me out: " + document.querySelector(".form-check-input").checked);
        // let inpEmail = document.getElementById("inputEmail").value;
        // let inpPassword = document.getElementById("inputPassword").value;
        // let inpWebsite = document.getElementById("inputWebsite").value;
        // let inpCheckBox = document.getElementById("check").value;
        // alert(inpEmail + " " + inpPassword + " " + " " + inpWebsite + " " + inpCheckBox);
        alert("Value Printed on Console");
    }

    var btnSubmit = document.getElementById("submit");
    // btnSubmit.onclick = userSubmit;
    btnSubmit.addEventListener("click", userSubmit);
};