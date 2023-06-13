function convert() {
    var selector = document.getElementById("Selector").value;
    var number = document.getElementById("number").value;
    var result = document.getElementById("Result");
    var incorrectInput = document.getElementById("incorrectinput");

    incorrectInput.textContent = "";

    if (selector === "Decimal2binary") {
        var binaryNumber = parseInt(number, 10).toString(2);
        if (isNaN(binaryNumber)) {
            incorrectInput.innerHTML = "Incorrect format";
            result.textContent = "Converted number: ";
        } else {
            result.textContent = "Converted number: " + binaryNumber;
        }
    } else if (selector === "Binary2decimal") {
        var decimalNumber = parseInt(number, 2).toString(10);
        if (isNaN(decimalNumber)) {
            incorrectInput.innerHTML = "Incorrect format";
            result.textContent = "Converted number: ";
        } else {
            result.textContent = "Converted number: " + decimalNumber;
        }
    } else if (selector === "Decimal2hex") {
        var decimalNumber = parseFloat(number);
        if (isNaN(decimalNumber)) {
            incorrectInput.innerHTML = "Incorrect format";
            result.textContent = "Converted number: ";
        } else {
            var hexNumber = decimalNumber.toString(16).toUpperCase();
            result.textContent = "Converted number: " + hexNumber;
        }
    } else if (selector === "Hex2decimal") {
        var decimalNumber = parseInt(number, 16).toString(10);
        if (isNaN(decimalNumber)) {
            incorrectInput.innerHTML = "Incorrect format";
            result.textContent = "Converted number: ";
        } else {
            result.textContent = "Converted number: " + decimalNumber;
        }
    } else if (selector === "Binary2hex") {
        var binaryNumber = number.match(/^[01]+$/);
        if (binaryNumber) {
            var hexNumber = parseInt(binaryNumber[0], 2).toString(16).toUpperCase();
            result.textContent = "Converted number: " + hexNumber;
        } else {
            incorrectInput.innerHTML = "Incorrect format";
            result.textContent = "Converted number: ";
        }
    } else if (selector === "Hex2binary") {
        var binaryNumber = parseInt(number, 16).toString(2);
        if (isNaN(binaryNumber)) {
            incorrectInput.innerHTML = "Incorrect format";
            result.textContent = "Converted number: ";
        } else {
            result.textContent = "Converted number: " + binaryNumber;
        }
    } else {
        incorrectInput.textContent = "Invalid conversion type selected.";
    }
}

function reset() {
    document.getElementById("number").value = "";
    document.getElementById("Result").textContent = "Converted number: ";
    document.getElementById("incorrectinput").innerHTML = "";
}