// WebForm2 -- On click of Submit button, Disply input values to pop-up window.
window.onload = function() {
    
    function userSubmit() {
        let productNumber = document.getElementById("productNumber").value;
        let name = document.getElementById("name").value;
        let unitPrice = document.getElementById("unitPrice").value;
        let quantityStock = document.getElementById("quantityStock").value;
        let supplier = document.getElementById("supplier").value;
        let inputDate = document.getElementById("inputDate").value;
        alert("Product Added: " + "\n" +
            "Product Number: " + productNumber + "\n" +
            "Name: " + name + "\n" +
            "Unit Price: " + unitPrice + "\n" +
            "Quantity in Stock: " + quantityStock + "\n" +
            "Supplier: " + supplier + "\n" +
            "Date Supplied: " +inputDate);
    }

    var btnSubmit = document.getElementById("submit");
    btnSubmit.addEventListener("click", userSubmit);
};