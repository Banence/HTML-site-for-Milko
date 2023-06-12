function isValidBinary(str){
    var binaryRegex = /^[01]+$/;
  
    return binaryRegex.test(str);
}
  
  function calculateResult() {
    var operation = document.getElementById("operation").value;
  
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
  
    if (num1 === "" || num2 === "") {
      document.getElementById("incorrectinput").innerHTML = "Please enter both numbers";
      document.getElementById("Result").value = "Binary value: ";
      return;
    } else if (!isValidBinary(num1) || !isValidBinary(num2)) {
      document.getElementById("incorrectinput").innerHTML = "Incorrect format";
      document.getElementById("Result").value = "Binary value: ";
      return;
    }
  
    var decimalNum1 = parseInt(num1, 2);
    var decimalNum2 = parseInt(num2, 2);
  
    var result;
    switch (operation) {
      case "addition":
        result = decimalNum1 + decimalNum2;
        break;
      case "subtraction":
        result = decimalNum1 - decimalNum2;
        break;
      case "multiplication":
        result = decimalNum1 * decimalNum2;
        break;
      case "division":
        result = decimalNum1 / decimalNum2;
        break;
      default:
        alert("Invalid operation");
        return;
    }
  
    var binaryResult = result.toString(2);
  
    document.getElementById("Result").value = "Binary value: " + binaryResult;
    document.getElementById("incorrectinput").innerHTML = "";
}
  
function resetCalculator(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("Result").value = "Binary value: ";
    document.getElementById("incorrectinput").innerHTML = "";
}
  