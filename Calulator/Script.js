const calculateBtn = document.getElementById("submitButton");
const resultMessage = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("Cal").value;
    let result = 0;

    switch (operator) {
        case "Addition":
            result = num1 + num2;
            break;
        case "Subtraction":
            result = num1 - num2;
            break;
        case "Multiplication":
            result = num1 * num2;
            break;
        case "Division":
            result = num1 / num2;
            break;
        default:
            resultMessage.textContent = "Invalid operator";
            return;
    }
    
    resultMessage.textContent = "Result: " + result;
});
